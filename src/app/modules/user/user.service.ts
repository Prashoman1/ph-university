import mongoose from "mongoose";
import { AcademicSemester } from "../academicSemester/acadmicSemester.model";
import { TStudent } from "../students/student.interface";
import { UserInformation } from "./user.interface";
import User from "./user.model";
import { generateStudentId } from "./user.utils";
import { Student } from "../students/student.model";

const createUserDB = async (payload: TStudent & UserInformation) => {
  //   console.log(payload, "payload");
  let userData: Partial<UserInformation> = {};
  const semesterInfo = await AcademicSemester.findById(
    payload?.admissionSemester
  );
  userData.role = "student";
  let session = await mongoose.startSession();
  try {
    session.startTransaction();
    const studentId = semesterInfo ? await generateStudentId(semesterInfo) : "";
    if (!studentId) {
      throw new Error("Student Id generation failed");
    }
    userData.id = studentId;
    userData.password = payload.password || "PHI@12345";
    const userInfo = await User.create([userData], { session });
    // console.log(userInfo, "userInfo");

    if (!userInfo.length) {
      throw new Error("User creation failed");
    }
    payload.user = userInfo[0]._id; //Reference ObjectId
    payload.id = userInfo[0].id;

    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new Error("Student creation failed");
    }
    await session.commitTransaction();
    session.endSession();
    return newStudent;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(error.message);
  }
};

export const UserServices = {
  createUserDB,
};

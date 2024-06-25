import mongoose from "mongoose";
import { TStudent } from "./student.interface";
import { Student } from "./student.model";
import User from "../user/user.model";

const createStudent = async (payload: TStudent) => {
  const result = await Student.create(payload);
  return result;
};

const getStudentIntoDB = async (
  id: string | null,
  query: Record<string, unknown> | null
) => {
  // find by student id
  if (id) {
    const findByIdQuery = await Student.findOne({ id, isDeleted: false })
      .populate("admissionSemester")
      .populate({
        path: "academicDepartment",
        populate: "academicFaculty",
      });
    return findByIdQuery;
  }
  // query variables
  let searchQuery = "";
  if (query?.searchQuery) {
    // set query values in variables
    searchQuery = query.searchQuery as string;
  }

  // search student fields
  const searchStudentFields = ["name.firstName", "email", "name.lastName"];

  // find by search query
  const result = await Student.find(
    {
      $or: searchStudentFields?.map((field) => ({
        [field]: { $regex: searchQuery, $options: "i" },
      })),
    },
    { isDeleted: false }
  )
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: "academicFaculty",
    });
  return result;
};

const deleteStudentIntoDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const student = await Student.findOne({ id });
    if (!student) {
      throw new Error("Student not found");
    }
    const studnetSoftDelete = await Student.updateOne(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    if (!studnetSoftDelete) {
      throw new Error("Student does not delete");
    }
    const user = await User.findOne({ id });
    if (!user) {
      throw new Error("User not found");
    }
    const userSoftDelete = await User.updateOne(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    if (!userSoftDelete) {
      throw new Error("User does not delete");
    }
    await session.commitTransaction();
    await session.endSession();
    return studnetSoftDelete;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error.message);
  }
};

const updateStudentInfoIntoBD = async (
  id: string,
  payload: Partial<TStudent>
) => {
  const { name, guardian, localGuardian, ...remainingInfo } = payload;

  const modifiedStudentData: Record<string, unknown> = {
    ...remainingInfo,
  };
  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      // modifiedUpdatedData[`name.${key}`] = value;
      modifiedStudentData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedStudentData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedStudentData[`localGuardian.${key}`] = value;
    }
  }
  //   console.log(modifiedStudentData,"id:",id, "modifiedStudentData");

  const updatedStudentInfo = await Student.findOneAndUpdate(
    { id },
    modifiedStudentData,
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedStudentInfo;
};

export const StudentService = {
  getStudentIntoDB,
  deleteStudentIntoDB,
  updateStudentInfoIntoBD,
};

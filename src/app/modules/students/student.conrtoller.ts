import catchAsnc from "../../utilis/catchAsync";
import sendResponse from "../../utilis/sendResponse";
import { StudentService } from "./student.service";

const getStudent = catchAsnc(async (req, res) => {
  let studentId: string | null = req.params.studentId;
  if (!studentId) {
    studentId = null;
  }
  console.log(req.query);
  
  const studnetInfo = await StudentService.getStudentIntoDB(studentId,req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message:"student fetched successfully",
    data: studnetInfo,
  });
});

const studentDelete = catchAsnc(async (req, res) => {
    const studentId = req.params.studentId;
    const deleteStudent = await StudentService.deleteStudentIntoDB(studentId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Student deleted successfully",
        data: deleteStudent,
    });
});

const studentInfoUpdate = catchAsnc(async(req,res)=>{
    const {student} = req.body
    const studnetId = req.params.studentId;
    const updateStudent = await StudentService.updateStudentInfoIntoBD(studnetId,student);
    sendResponse(res,{
        statusCode:200,
        success:true,
        data:updateStudent
    });

})

export const StudentController = {
  getStudent,
  studentDelete,
  studentInfoUpdate
};

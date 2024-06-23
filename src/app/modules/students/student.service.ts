import { TStudent } from "./student.interface";
import { Student } from "./student.model";


const createStudent = async (payload:TStudent)=>{

    const result = await Student.create(payload);
    return result;
}
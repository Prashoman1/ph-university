import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.modal";


const createAcademicFacultyIntoDB = async (payload:TAcademicFaculty)=>{

    const result = await AcademicFaculty.create(payload);
    return result;
}
const getAcademicFacultiesIntoDB = async ()=>{
    const result = await AcademicFaculty.find().sort({createdAt:-1});
    return result;

}

const updateAcademicFacultyIntoDB = async (facultyId:string,payload:TAcademicFaculty)=>{
        const result = await AcademicFaculty.findByIdAndUpdate( facultyId,payload,{new:true});
        return result;

}
const getAcademicFacultyByIdIntoDB = async (facultyId:string)=>{
    const result = await AcademicFaculty.findById(facultyId);
    return result;
}

export const AcademicService ={
    createAcademicFacultyIntoDB,
    getAcademicFacultiesIntoDB,
    updateAcademicFacultyIntoDB,
    getAcademicFacultyByIdIntoDB
}
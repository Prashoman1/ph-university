import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.modal";



const postAcadmicDepartment_IntoDB = async (payload:TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
}

const getAllAcademicDepartment_IntoDB = async () =>{
    const allDepartment = await AcademicDepartment.find().populate('academicFaculty');
    return allDepartment;
}

const getAcademicDepartmentById_IntoDB = async (paylod:string) =>{
    const department = await AcademicDepartment.findById(paylod).populate('academicFaculty');
    return department;

}

const updateAcademicDepartment_IntoDB = async (departmentId:string, payload:TAcademicDepartment) =>{
    const department = await AcademicDepartment.findByIdAndUpdate(departmentId, payload, {new:true});
    return department;
}


export const AcademicDepartmentService = {
    postAcadmicDepartment_IntoDB,
    getAllAcademicDepartment_IntoDB,
    getAcademicDepartmentById_IntoDB,
    updateAcademicDepartment_IntoDB
}
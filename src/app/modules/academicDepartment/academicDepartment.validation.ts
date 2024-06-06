import { z } from "zod";


const createAcademicDepartmentVSchema = z.object({
    body: z.object({
        departmentName: z.string({
            invalid_type_error: 'Academic department must be string',
            required_error: 'Name is required',
        }).nonempty(),
        academicFaculty: z.string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required',
        }).nonempty()
    })
})

 const updateAcademicDepartmentVSchema = z.object({
    body: z.object({
        departmentName: z.string({
            invalid_type_error: 'Academic department must be string',
            required_error: 'Name is required',
        }).optional(),
        academicFaculty: z.string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required',
        }).optional()
    })
})

export const AcademicDepartmentValidation ={
    createAcademicDepartmentVSchema,
    updateAcademicDepartmentVSchema
}

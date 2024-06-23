import { z } from "zod";
import { academicSemesterName, acadmicSemesterCode, months } from "./academicSemester.Constant";


const createAcademicSemesterVSchema = z.object({
    body: z.object({
        name: z.enum([...academicSemesterName] as [string, ...string[]]),
        year:z.string().nonempty(),
        code:z.enum([...acadmicSemesterCode] as [string, ...string[]]),
        startMonth:z.enum([...months] as [string, ...string[]]),
        endMonth:z.enum([...months] as [string, ...string[]])
    })
})

 const updateAcademicSemesterVSchema = z.object({
    body: z.object({
        name: z.enum([...academicSemesterName] as [string, ...string[]]).optional(),
        year:z.string().nonempty().optional(),
        code:z.enum([...acadmicSemesterCode] as [string, ...string[]]).optional(),
        startMonth:z.enum([...months] as [string, ...string[]]).optional(),
        endMonth:z.enum([...months] as [string, ...string[]]).optional()
    })
})

export const AcademicSemesterValidation ={
    createAcademicSemesterVSchema,
    updateAcademicSemesterVSchema
}

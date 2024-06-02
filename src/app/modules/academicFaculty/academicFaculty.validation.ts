import { z } from "zod";


export const academicFacultyVSchema = z.object({
    body : z.object({
        name:z.string()
    })
})

export const updateAcademicFacultyVSchema = z.object({
    body : z.object({
        name:z.string().optional()
    })
})
import { z } from "zod";



const studentValidationCreate = z.object({
    body:z.object({
        name: z.object({
            firstName: z.string().min(1).max(20),
            middleName: z.string().min(1).max(20),
            lastName: z.string().min(1).max(20),
        }),
        gender: z.enum(['male','female','other']),
        dateOfBirth:z.string(),
        email:z.string(),
        contactNo:z.string(),
        emergencyContactNo:z.string(),
        bloodGroup:z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
        presentAddress:z.string(),
        permanentAddress:z.string(),
        guardian:z.object({
            fatherName: z.string(),
            fatherOccupation: z.string(),
            fatherContactNo: z.string(),
            motherName: z.string(),
            motherOccupation: z.string(),
            motherContactNo: z.string(),
        }),
        localGuardian:z.object({
            name: z.string(),
            occupation: z.string(),
            contactNo: z.string(),
            address: z.string(),
        }),
        profileImg:z.string().optional(),
        academicDepartment:z.string(),
        admissionSemester:z.string(),
        isDeleted:z.boolean().default(false),
    }),
})

export const StudentValidation={
    studentValidationCreate
}
import { z } from "zod";

// password: { type: String, required: true },
// needPasswordChange: { type: Boolean, default: true },
// role: { type: String, enum: Role, required: true },
// status: { type: Boolean, default: true },
// isDeleted:
const UserValidationCreate = z.object({
    body:z.object({
        password: z.string().min(8).max(20),
        needPasswordChange: z.boolean().default(true),
        role: z.enum(['admin', 'student', 'faculty']).default('student'),
        status: z.boolean().default(true),
        isDeleted: z.boolean().default(false),
    }),
})

const UserValidationUpdate = z.object({
    body:z.object({
        password: z.string().min(8).max(20).optional(),
        needPasswordChange: z.boolean().default(true).optional(),
        role: z.enum(['admin', 'student', 'faculty']).default('student').optional(),
        status: z.boolean().default(true).optional(),
        isDeleted: z.boolean().default(false).optional(),
    }),
})


export const UserValidation ={
    UserValidationCreate,
    UserValidationUpdate
}
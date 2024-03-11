import {z} from 'zod';

export const UpdateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    alternateEmail: z.string().optional(),
    countryCode: z.string().optional(),
    contactNumber: z.string().optional(),
})

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>
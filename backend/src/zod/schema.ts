import {z} from 'zod';

export const UpdateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    alternateEmail: z.string().optional(),
    countryCode: z.string().optional(),
    contactNumber: z.string().optional(),
    test: z.string(),
});
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>

export const CreateVaultInputSchema = z.object({
    name: z.string(),
});
export type CreateVaultInput = z.infer<typeof CreateVaultInputSchema>

export const CreateOrUpdateVaultItemInputSchema = z.array(z.object({
    name: z.string(),
    secret: z.string(),
    active: z.boolean().optional(),
}))
export type CreateOrUpdateVaultItemInput = z.infer<typeof CreateOrUpdateVaultItemInputSchema>


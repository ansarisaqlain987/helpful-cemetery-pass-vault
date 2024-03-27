import { Document } from "mongoose";
import {z} from 'zod';

export const sanitizeObject = (input: { [key: string]: string }): { [key: string]: string } => {
    const keys = Object.keys(input);
    const response: { [key: string]: string } = {};
    keys.map((k: string) => {
        if (input[k] !== undefined) {
            response[k] = input[k];
        }
    });
    return response
}

export const saveAndGetJsonValue = async <T = any>(doc: Document<unknown, {}, T>) => {
    const d = await doc.save();
    return d.toJSON();
}

export const validateObject = <T=any>(schema: any, data: any) => {
    const valid = schema.safeParse(data);
    return {success: valid.success, error: valid?.error?.issues, data: valid.data as T}
}
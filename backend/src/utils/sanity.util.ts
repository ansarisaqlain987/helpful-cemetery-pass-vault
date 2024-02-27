import { Document } from "mongoose";

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
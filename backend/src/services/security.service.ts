import crypto from 'crypto';
import { sign, decode } from 'jsonwebtoken';
import { APP_CONSTANTS } from '../config/constants';
import { TokenPayload } from '../types';
import { AES, enc } from 'crypto-ts';

export const encryptData = (data: string): string => {
    return AES.encrypt(data, APP_CONSTANTS.SIGNED_SECRET).toString();
}

export const decryptData = (encData: string): string => {
    return AES.decrypt(encData, APP_CONSTANTS.SIGNED_SECRET).toString(enc.Utf8);
}

export const encryptResponseData = (data: string) => {
    const encryptedData = crypto.publicEncrypt(
        {
            key: process.env.CLIENT_PUBLIC_KEY ?? '',
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(data)
    );
    return encryptedData.toString("base64");
}

export const decryptRequestData = (encryptedData: string) => {
    const encryptedDataBuffer = Buffer.from(encryptedData, "base64");
    const decryptedData = crypto.privateDecrypt(
        {
            key: process.env.SERVER_PRIVATE_KEY ?? '',
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        encryptedDataBuffer
    );
    return decryptedData.toString("utf-8");
}

export const createToken = (payload: TokenPayload): string => {
    const token = sign(payload, APP_CONSTANTS.SECRET);
    return encryptData(token);
}

export const decodeToken = (token: string): TokenPayload => {
    const decToken = decryptData(token);
    return decode(decToken) as TokenPayload;
}   
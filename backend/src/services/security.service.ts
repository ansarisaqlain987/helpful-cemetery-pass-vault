import crypto from 'crypto';
export const encryptData = () => { }

export const descryptData = () => { }

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
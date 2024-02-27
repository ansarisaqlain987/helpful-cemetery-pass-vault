
import { APP_CONSTANTS } from "../config/constants";
import { getFirebaseAuth } from "../config/firebase";
import { decodeToken } from "../services/security.service";
import { NextFunction, Request, Response, TokenPayload } from "../types";

export const useAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('authorization');
    let authObject;
    try {
        if (!authHeader) { throw new Error('Invalid Token') }
        const token = authHeader?.slice(7);
        if (!token) { throw new Error('Invalid Token') }

        const decodedPayload: TokenPayload = decodeToken(token);

        req.auth = await getTokenPayloadData(decodedPayload);
        next();
    } catch (err) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }
}

const getTokenPayloadData = async (decodedPayload: TokenPayload): Promise<TokenPayload> => {
    return APP_CONSTANTS.LOCAL_DEV ? decodedPayload : (await getAuthObjectFromFirebase(decodedPayload.fb, decodedPayload.id));
}

const getAuthObjectFromFirebase = async (token: string, id: string): Promise<TokenPayload> => {
    const fbRes = await getFirebaseAuth().verifyIdToken(token);
    return {
        email: fbRes?.email ?? '',
        uid: fbRes?.uid,
        id,
        fb: token
    } as TokenPayload
}
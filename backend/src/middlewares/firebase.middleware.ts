
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

        authObject = APP_CONSTANTS.LOCAL_DEV ? ({
            email: req.get('x_user_email') ?? 'test@test.com',
            uid: req.get('x_user_uid') ?? '',
            id: decodedPayload.id,
            fb: decodedPayload.fb
        }) : (await getAuthObjectFromFirebase(decodedPayload.fb, decodedPayload.id));

    } catch (err) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }
    req.auth = authObject as TokenPayload;
    next();
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
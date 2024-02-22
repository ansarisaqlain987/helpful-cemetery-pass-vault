
import { APP_CONSTANTS } from "../config/constants";
import { getFirebaseAuth } from "../config/firebase";
import { AuthObject, NextFunction, Request, Response } from "../types";

export const useAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('authorization');
    let authObject;
    try {
        if (!authHeader) { throw new Error('Invalid Token') }
        const token = authHeader?.slice(7);
        if (!token) { throw new Error('Invalid Token') }

        authObject = APP_CONSTANTS.LOCAL_DEV ? ({
            email: req.get('x_user_email') ?? 'test@test.com',
            uid: req.get('x_user_uid') ?? ''
        }) : (await getAuthObjectFromFirebase(token));

    } catch (err) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }
    req.auth = authObject as AuthObject;
    next();
}

const getAuthObjectFromFirebase = async (token: string): Promise<AuthObject> => {
    const fbRes = await getFirebaseAuth().verifyIdToken(token);
    return {
        email: fbRes?.email ?? '',
        uid: fbRes?.uid,
    } as AuthObject
}
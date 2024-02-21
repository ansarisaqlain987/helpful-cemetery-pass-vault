
import { getFirebaseAuth } from "../config/firebase";
import { Auth, NextFunction, Request, Response } from "../types";

export const useAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('authorization');
    if (!authHeader) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }
    const token = authHeader?.slice(7);
    if (!token) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }

    try {
        const fbRes = await getFirebaseAuth().verifyIdToken(token);
        const authObj: Auth = {
            email: fbRes?.email ?? '',
            uid: fbRes?.uid,
        }
        req.auth = authObj;
        next();
    } catch (err) {
        return res.status(401).send({ data: null, error: ["Invalid Token"] });
    }
}
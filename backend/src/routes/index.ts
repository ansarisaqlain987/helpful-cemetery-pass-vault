import { NextFunction, Request, Response } from "../types";
import { CustomError } from "../utils/customError";

export const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).send({ message: "Not Found" })
}

export const defaultExceptionHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if (err?.message?.toString()?.toLowerCase() === 'unauthenticated') {
        return res.status(401).send({ status: 401, error: 'Unauthorized' })
    }
    if(err instanceof CustomError){
        return res.status(err.getStatus()).send(err.getMessage())
    }
    return res.status(500).send({ error: 'INTERNAL SERVER ERROR' })
}
import { AppContext, AppResponse, ControllerFunction, TokenPayload } from "../types";

export const login: ControllerFunction = (ctx: AppContext): AppResponse => {

    const auth: TokenPayload = ctx.request.auth as TokenPayload;

    return {
        data: ["HELO"],
    }
}
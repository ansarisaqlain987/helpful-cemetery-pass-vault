import { AppContext, AppResponse, ControllerFunction } from "../types";

export const registerUser: ControllerFunction = (ctx: AppContext): AppResponse => {
    return {
        data: ["HELO"],
    }
}
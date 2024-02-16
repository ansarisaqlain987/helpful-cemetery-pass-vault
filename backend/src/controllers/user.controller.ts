import { AppContext, ControllerFunction } from "../types";

export const registerUser: ControllerFunction = (ctx: AppContext) => {
    return {
        data: "HELO"
    }
}
import { registerUser } from "../controllers/user.controller";
import { controller } from "../utils/createController";
import { Router } from "./../types";

export const UserRoutes = (router: Router) => {

    router.get('/register', controller(registerUser));
    return router;
}
import { registerUser } from "../controllers/user.controller";
import { useController } from "../utils/createController";
import { Router } from "./../types";

export const UserRoutes = (router: Router) => {

    router.get('/register', useController(registerUser));
    return router;
}
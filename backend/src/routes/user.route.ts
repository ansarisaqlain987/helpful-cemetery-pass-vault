import { login } from "../controllers/user.controller";
import { useController } from "../utils/createController";
import { Router } from "./../types";

export const UserRoutes = (router: Router) => {

    router.post('/login', useController(login));
    return router;
}
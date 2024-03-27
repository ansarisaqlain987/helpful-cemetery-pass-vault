
import { UserController } from "../controllers";
import { useController } from "../utils/createController";
import { Router } from "./../types";

export const UserRoutes = (router: Router) => {

    router.post('/login', useController(UserController.login));
    router.post('/update', useController(UserController.updateUser));
    router.get('/', (req, res) => {
        return res.send({ "data": "here" })
    });

    return router;
}
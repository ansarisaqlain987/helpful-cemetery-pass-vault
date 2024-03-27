
import { VaultController } from "../controllers";
import { useController } from "../utils/createController";
import { Router } from "../types";

export const VaultRoutes = (router: Router) => {

    router.post('/', useController(VaultController.createVaultWithoutItems));
    router.post('/:id', useController(VaultController.updateVaultName));
    router.get('/', useController(VaultController.getVaultsByUserId));
    router.get('/:id', useController(VaultController.getVaultById));
    router.post('/:id/items', useController(VaultController.updateItems))

    return router;
}
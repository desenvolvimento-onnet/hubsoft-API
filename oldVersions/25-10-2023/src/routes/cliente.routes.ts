import { Router } from "express";

import ClienteController from "../controllers/ClienteController";

const router = Router();

router.get("/:codigo_cliente", ClienteController.show);

export default router;

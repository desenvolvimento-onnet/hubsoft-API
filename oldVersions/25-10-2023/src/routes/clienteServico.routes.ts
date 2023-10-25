import { Router } from "express";

import ClienteServicoController from "../controllers/ClienteServicoController";

const router = Router();

router.get("/", ClienteServicoController.index);
router.get("/latest/:id_cliente_servico", ClienteServicoController.getLatest);

export default router;

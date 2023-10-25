import { Router } from "express";

import OrdemServicoController from "../controllers/OrdemServicoController";

const router = Router();

router.get("/:numero_ordem_servico", OrdemServicoController.show);

export default router;

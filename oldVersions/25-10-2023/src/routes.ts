import { Router } from "express";

import ordemServicoRoutes from "./routes/ordemServico.routes";
import clienteServicoRoutes from "./routes/clienteServico.routes";
import clienteRoutes from "./routes/cliente.routes";

const routes = Router();

routes.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

routes.use("/ordem_servico", ordemServicoRoutes);
routes.use("/cliente_servico", clienteServicoRoutes);
routes.use("/cliente", clienteRoutes);

export default routes;

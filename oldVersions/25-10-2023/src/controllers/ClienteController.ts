import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Cliente from "../models/Cliente";

class ClienteController {
  async show(request: Request, response: Response) {
    try {
      const clienteRepository = getRepository(Cliente);

      const { codigo_cliente } = request.params;

      if (!codigo_cliente)
        return response.status(400).send("Preencher atributo codigo_cliente");

      const cliente = await clienteRepository.findOne({
        codigo_cliente: Number(codigo_cliente),
      });

      if (!cliente) return response.status(404).send("Not found cliente");

      return response.send(cliente);
    } catch (err) {
      return response.status(500).send(err);
    }
  }
}

export default new ClienteController();

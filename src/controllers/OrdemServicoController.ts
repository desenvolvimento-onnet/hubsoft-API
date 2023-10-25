import { Request, Response } from "express";
import { getRepository } from "typeorm";

import ClienteServicoEndereco from "../models/ClienteServicoEndereco";
import OrdemServico from "../models/OrdemServico";

class OrdemServicoController {
  async show(request: Request, response: Response) {
    try {
      const ordemServicoRepository = getRepository(OrdemServico);
      const clienteServicoEnderecoRepository = getRepository(
        ClienteServicoEndereco
      );
      const { numero_ordem_servico } = request.params;

      const ordemServico = await ordemServicoRepository.findOne({
        numero_ordem_servico,
      });

      if (!ordemServico)
        return response.status(404).send("Not found ordem_servico");

      const endereco = await clienteServicoEnderecoRepository.findOne({
        id_cliente_servico: ordemServico.id_cliente_servico,
        tipo: "instalacao",
      });

      if (!endereco || !endereco.endereco_numero)
        return response.status(404).send("Not found endereco_numero");

        const defaultDate = new Date('2000-01-01T00:00:00.000Z');

        const defaultDateString = defaultDate.toISOString();


      if (!ordemServico.cliente_servico.cliente.data_nascimento) {
        ordemServico.cliente_servico.cliente.data_nascimento = defaultDateString ;
      }

      ordemServico.endereco = endereco.endereco_numero;

      return response.json(ordemServico);
    } catch (err) {
      return response.status(500).send(err);
    }
  }
}

export default new OrdemServicoController();

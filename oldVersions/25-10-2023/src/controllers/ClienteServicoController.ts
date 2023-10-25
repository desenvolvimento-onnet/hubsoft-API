import { Request, Response } from "express";
import { getRepository } from "typeorm";

import ClienteServicoEndereco from "../models/ClienteServicoEndereco";
import ClienteServico from "../models/ClienteServico";
import Cliente from "../models/Cliente";

class ClienteServicoController {
  async index(request: Request, response: Response) {
    try {
      const clienteRepository = getRepository(Cliente);
      const clienteServicoRepository = getRepository(ClienteServico);
      const clienteServicoEnderecoRepository = getRepository(
        ClienteServicoEndereco
      );

      const { codigo_cliente } = request.query;

      if (!codigo_cliente)
        return response.status(400).send("Preencher atributo codigo_cliente");

      const cliente = await clienteRepository.findOne({
        codigo_cliente: Number(codigo_cliente),
      });

      if (!cliente) return response.status(404).send("Not found cliente");

      const clienteServicos = await clienteServicoRepository.find({
        id_cliente: cliente.id,
      });

      if (!clienteServicos)
        return response.status(404).send("Not found cliente_servico");

      for (var i = 0; i < clienteServicos.length; i++) {
        const endereco = await clienteServicoEnderecoRepository.findOne({
          id_cliente_servico: clienteServicos[i].id,
          tipo: "instalacao",
        });

        if (!endereco || !endereco.endereco_numero)
          return response.status(404).send("Not found endereco_numero");

        clienteServicos[i].endereco = endereco.endereco_numero;
      }

      return response.json(clienteServicos);
    } catch (err) {
      return response.status(500).send(err);
    }
  }

  async getLatest(request: Request, response: Response) {
    try {
      const clienteRepository = getRepository(Cliente);
      const clienteServicoRepository = getRepository(ClienteServico);
      const clienteServicoEnderecoRepository = getRepository(
        ClienteServicoEndereco
      );

      const { id_cliente_servico } = request.params;

      var clienteServico = await clienteServicoRepository.findOneOrFail(id_cliente_servico);
      var id_cliente_servico_antigo: number | undefined  = clienteServico.id;

      while(id_cliente_servico_antigo) {
        const data: ClienteServico | undefined = await clienteServicoRepository.findOne({ id_cliente_servico_antigo })

        id_cliente_servico_antigo = data?.id;

        if(data) clienteServico = data;
      }

      const cliente = await clienteRepository.findOne({
        id: clienteServico.id_cliente
      });

      if (!cliente) return response.status(404).send("Not found cliente");

      const endereco = await clienteServicoEnderecoRepository.findOne({
        id_cliente_servico: clienteServico.id,
        tipo: "instalacao",
      });

      if (!endereco || !endereco.endereco_numero)
        return response.status(404).send("Not found endereco_numero");

      clienteServico.endereco = endereco.endereco_numero;

      return response.json(clienteServico);
    } catch (err) {
      return response.status(500).send(err);
    }
  }
}

export default new ClienteServicoController();

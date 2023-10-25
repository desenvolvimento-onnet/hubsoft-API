import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import EnderecoNumero from "./EnderecoNumero";
import Usuario from "./Usuario";

@Entity()
class ClienteServicoEndereco {
  @PrimaryColumn("integer", { name: "id_cliente_servico_endereco" })
  id: number;

  @Column()
  tipo: "fiscal" | "instalacao" | "cobranca" | "cadastral";

  @Column("integer")
  id_endereco_numero: number;

  @Column("integer")
  id_cliente_servico: number;

  @ManyToOne(
    (type) => EnderecoNumero,
    (enderecoNumero) => enderecoNumero.cliente_servico_enderecos,
    { eager: true }
  )
  @JoinColumn({ name: "id_endereco_numero" })
  endereco_numero: EnderecoNumero;
}

export default ClienteServicoEndereco;

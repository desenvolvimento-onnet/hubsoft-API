import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import Cidade from "./Cidade";
import ClienteServicoEndereco from "./ClienteServicoEndereco";

@Entity()
class EnderecoNumero {
  @PrimaryColumn({ name: "id_endereco_numero" })
  id: number;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  endereco: string;

  @Column()
  cep: string;

  @Column("integer")
  id_cidade: number;

  @ManyToOne((type) => Cidade, (cidade) => cidade.enderecos_numero, {
    eager: true,
  })
  @JoinColumn({ name: "id_cidade" })
  cidade: Cidade;

  @OneToMany(
    (type) => ClienteServicoEndereco,
    (clienteServicoEndereco) => clienteServicoEndereco.endereco_numero
  )
  cliente_servico_enderecos: ClienteServicoEndereco[];
}

export default EnderecoNumero;

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

import ClienteServico from "./ClienteServico";
import ServicoNavegacao from "./ServicoNavegacao";

@Entity()
class Servico {
  @PrimaryColumn("integer", { name: "id_servico" })
  id: number;

  @Column()
  descricao: string;

  @Column("double precision")
  valor: number;

  @Column("boolean")
  ativo: boolean;

  @OneToMany(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.servico
  )
  cliente_servicos: ClienteServico[];

  @OneToOne(
    (type) => ServicoNavegacao,
    (servicoNavegacao) => servicoNavegacao.servicos,
    { eager: true }
  )
  navegacao: ServicoNavegacao;
}

export default Servico;

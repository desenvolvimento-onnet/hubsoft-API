import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import Servico from "./Servico";

@Entity()
class ServicoNavegacao {
  @PrimaryColumn("integer", { name: "id_servico_navegacao" })
  id: number;

  @Column("integer")
  download_contrato: number;

  @Column("integer")
  upload_contrato: number;

  @ManyToOne((type) => Servico, (servico) => servico.navegacao, {})
  @JoinColumn({ name: "id_servico" })
  servicos: Servico[];
}

export default ServicoNavegacao;

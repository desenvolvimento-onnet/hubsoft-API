import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import OrdemServico from "./OrdemServico";

@Entity()
export class TipoOrdemServico {
  @PrimaryColumn("integer", { name: "id_tipo_ordem_servico" })
  id: number;

  @Column()
  descricao: string;

  @OneToMany(
    (type) => OrdemServico,
    (ordemServico) => ordemServico.tipo_ordem_servico
  )
  ordens_servico: OrdemServico[];
}

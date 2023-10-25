import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import ClienteServico from "./ClienteServico";

@Entity()
class ServicoStatus {
  @PrimaryColumn("integer")
  id_servico_status: number;

  @Column()
  descricao: string;

  @OneToMany(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.status
  )
  clienteServicos: ClienteServico[];
}

export default ServicoStatus;

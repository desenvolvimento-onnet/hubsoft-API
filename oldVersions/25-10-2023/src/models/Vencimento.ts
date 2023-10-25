import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import ClienteServico from "./ClienteServico";

@Entity()
class Vencimento {
  @PrimaryColumn("integer")
  id_vencimento: number;

  @Column()
  dia_vencimento: string;

  @Column()
  dia_fechamento: string;

  @OneToMany(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.vencimento
  )
  servicos: ClienteServico[];
}

export default Vencimento;

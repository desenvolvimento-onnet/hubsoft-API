import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import Cidade from "./Cidade";

@Entity()
class Estado {
  @PrimaryColumn("integer")
  id_estado: number;

  @Column()
  nome: string;

  @Column()
  sigla: string;

  @OneToMany((type) => Cidade, (cidade) => cidade.estado)
  cidades: Cidade[];
}

export default Estado;

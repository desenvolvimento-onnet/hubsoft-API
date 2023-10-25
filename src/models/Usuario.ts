import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import ClienteServico from "./ClienteServico";

@Entity({ name: "users" })
class Usuario {
  @PrimaryColumn("integer")
  id: number;

  @Column({ name: "name" })
  nome: string;

  @OneToMany(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.vendedor
  )
  cliente_servico: ClienteServico[];
}

export default Usuario;

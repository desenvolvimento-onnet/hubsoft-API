import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import ClienteServico from "./ClienteServico";

@Entity()
class Cliente {
  @PrimaryColumn("integer", { name: "id_cliente" })
  id: number;

  @Column("integer")
  codigo_cliente: number;

  @Column()
  nome_razaosocial: string;

  @Column()
  nome_fantasia: string;

  @Column()
  rg: string;
  
  @Column()
  email_principal: string;
  
  @Column()
  email_secundario: string;
  
  @Column()
  telefone_primario: string;
  
  @Column()
  telefone_secundario: string;
  
  @Column()
  telefone_terciario: string;
  
  @Column()
  data_nascimento: string;
  
  @Column()
  inscricao_estadual: string;
  
  @Column()
  inscricao_municipal: string;
  
  @Column()
  cpf_cnpj: string;

  @Column()
  tipo_pessoa: string;

  @OneToMany(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.cliente
  )
  cliente_servicos: ClienteServico[];
}

export default Cliente;

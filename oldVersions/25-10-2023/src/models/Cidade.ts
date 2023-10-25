import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import EnderecoNumero from "./EnderecoNumero";
import Estado from "./Estado";

@Entity()
class Cidade {
  @PrimaryColumn("integer")
  id_cidade: number;

  @Column()
  nome: string;

  @Column()
  ibge: string;

  @OneToMany(
    (type) => EnderecoNumero,
    (enderecoNumero) => enderecoNumero.cidade
  )
  enderecos_numero: EnderecoNumero[];

  @ManyToOne((type) => Estado, (estado) => estado.cidades, {eager: true})
  @JoinColumn({ name: "id_estado" })
  estado: Estado;
}

export default Cidade;

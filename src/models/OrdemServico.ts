import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import ClienteServico from "./ClienteServico";
import ClienteServicoEndereco from "./ClienteServicoEndereco";
import EnderecoNumero from "./EnderecoNumero";
import { TipoOrdemServico } from "./TipoOrdemServico";

@Entity()
class OrdemServico {
  @PrimaryColumn("integer", { name: "id_ordem_servico" })
  id: number;

  @Column("integer")
  numero_ordem_servico: string;

  @Column("timestamp without time zone")
  data_cadastro: Date;

  @Column()
  status: "finalizado" | "pendente" | "aguardando_agendamento";

  @Column()
  descricao_abertura: string;

  @Column()
  descricao_servico: string;

  @Column()
  descricao_fechamento: string;

  @Column("integer")
  id_cliente_servico: number;

  @Column("integer")
  id_tipo_ordem_servico: number;

  @ManyToOne(
    (type) => ClienteServico,
    (clienteServico) => clienteServico.ordens_servico,
    { eager: true }
  )
  @JoinColumn({ name: "id_cliente_servico" })
  cliente_servico: ClienteServico;

  @ManyToOne(
    (type) => TipoOrdemServico,
    (tipoOrdemServico) => tipoOrdemServico.ordens_servico,
    { eager: true }
  )
  @JoinColumn({ name: "id_tipo_ordem_servico" })
  tipo_ordem_servico: TipoOrdemServico;

  endereco?: EnderecoNumero;
}

export default OrdemServico;

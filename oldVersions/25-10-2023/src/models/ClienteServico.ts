import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import Cliente from "./Cliente";
import EnderecoNumero from "./EnderecoNumero";
import OrdemServico from "./OrdemServico";
import Servico from "./Servico";
import ServicoStatus from "./ServicoStatus";
import Usuario from "./Usuario";
import Vencimento from "./Vencimento";

@Entity()
class ClienteServico {
  @PrimaryColumn("integer", { name: "id_cliente_servico" })
  id: number;

  @Column("integer")
  valor: number;

  @Column("integer")
  id_cliente: number;

  @Column("integer")
  id_servico: number;

  @Column("integer")
  numero_plano: number;

  @Column("integer")
  id_cliente_servico_antigo: number;

  @Column("timestamp without time zone")
  data_cadastro: Date;

  @Column("timestamp without time zone")
  data_habilitacao: Date;

  @Column("timestamp without time zone")
  data_reajuste: Date;

  @ManyToOne((type) => Cliente, (cliente) => cliente.cliente_servicos, {
    eager: true,
  })
  @JoinColumn({ name: "id_cliente" })
  cliente: Cliente;

  @ManyToOne((type) => Servico, (servico) => servico.cliente_servicos, {
    eager: true,
  })
  @JoinColumn({ name: "id_servico" })
  servico: Servico;

  @OneToMany(
    (type) => OrdemServico,
    (ordemServico) => ordemServico.cliente_servico
  )
  ordens_servico: OrdemServico[];

  @ManyToOne((type) => Vencimento, (vencimento) => vencimento.servicos, {
    eager: true,
  })
  @JoinColumn({ name: "id_vencimento" })
  vencimento: Vencimento;

  @ManyToOne((type) => Usuario, (usuario) => usuario.cliente_servico, {
    eager: true,
  })
  @JoinColumn({ name: "id_usuario_vendedor" })
  vendedor: Usuario;

  @ManyToOne(
    (type) => ServicoStatus,
    (servicoStatus) => servicoStatus.clienteServicos,
    { eager: true }
  )
  @JoinColumn({ name: "id_servico_status" })
  status: ServicoStatus;

  @Column("integer")
  id_servico_status: number;

  endereco?: EnderecoNumero;
}

export default ClienteServico;

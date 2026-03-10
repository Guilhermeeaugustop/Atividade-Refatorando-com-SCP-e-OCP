import { CalculadoraImposto } from './CalculoImposto';
import { MetodoPagamento } from './Pagamento';
import { ServicoNotificacao } from './Notificacao';

export class ProcessadorPedido {
  
  constructor(private servicoNotificacao: ServicoNotificacao) {}

  processar(
    impostoStrategy: CalculadoraImposto,
    preco: number,
    quantidade: number,
    metodoPagamento: MetodoPagamento,
    emailCliente: string
  ): void {
    
    const subtotal = preco * quantidade;
    const imposto = impostoStrategy.calcular(preco, quantidade);
    const total = subtotal + imposto;

    metodoPagamento.processar(total);

    const mensagem = `Seu pedido de R$ ${total.toFixed(2)} foi confirmado!`;
    this.servicoNotificacao.enviar(emailCliente, mensagem);
  }
}
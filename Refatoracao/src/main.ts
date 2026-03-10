import { ImpostoEletronico, ImpostoAlimento, ImpostoVestuario } from './CalculoImposto';
import { PagamentoCartao, PagamentoBoleto, PagamentoPix } from './Pagamento';
import { NotificacaoEmail } from './Notificacao';
import { ProcessadorPedido } from './ProcessarPedido';

const servicoNotificacao = new NotificacaoEmail();

const processador = new ProcessadorPedido(servicoNotificacao);

console.log("=== INICIANDO PROCESSAMENTO DE PEDIDOS ===\n");

console.log("🛒 Pedido 1: Smartphone (Eletrônico)");
const impostoEletronico = new ImpostoEletronico();
const pagamentoCartao = new PagamentoCartao();

processador.processar(
  impostoEletronico,
  2000.00,          
  2,                
  pagamentoCartao,  
  "joao@email.com"  
);

console.log("\n------------------------------------------\n");
console.log("🛒 Pedido 2: Compras do Mês (Alimento)");
const impostoAlimento = new ImpostoAlimento();
const pagamentoPix = new PagamentoPix();

processador.processar(
  impostoAlimento,
  300.00,           
  1,                
  pagamentoPix,
  "maria@email.com" 
);

console.log("\n=== PROCESSAMENTO CONCLUÍDO ===");
export interface MetodoPagamento {
  processar(valor: number): void;
}

export class PagamentoCartao implements MetodoPagamento {
  processar(valor: number): void {
    console.log(`Processando cartão: R$ ${valor.toFixed(2)}`);
  }
}

export class PagamentoBoleto implements MetodoPagamento {
  processar(valor: number): void {
    console.log(`Gerando boleto: R$ ${valor.toFixed(2)}`);
  }
}

export class PagamentoPix implements MetodoPagamento {
  processar(valor: number): void {
    console.log(`Gerando QR Code PIX: R$ ${valor.toFixed(2)}`);
  }
}
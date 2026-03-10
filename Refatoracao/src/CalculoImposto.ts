export interface CalculadoraImposto {
  calcular(preco: number, quantidade: number): number;
}

export class ImpostoEletronico implements CalculadoraImposto {
  calcular(preco: number, quantidade: number): number {
    return (preco * quantidade) * 0.15;
  }
}

export class ImpostoAlimento implements CalculadoraImposto {
  calcular(preco: number, quantidade: number): number {
    return (preco * quantidade) * 0.05;
  }
}

export class ImpostoVestuario implements CalculadoraImposto {
  calcular(preco: number, quantidade: number): number {
    return (preco * quantidade) * 0.10;
  }
}
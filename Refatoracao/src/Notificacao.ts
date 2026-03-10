export interface ServicoNotificacao {
  enviar(destino: string, mensagem: string): void;
}

export class NotificacaoEmail implements ServicoNotificacao {
  enviar(email: string, mensagem: string): void {
    console.log(`Enviando email para ${email}: ${mensagem}`);
  }
}
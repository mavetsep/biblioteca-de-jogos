import { Jogo } from './jogo';

export class JogoCarta extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public idadeMinima: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): string {
    return `Regras do jogo de cartas "${this.titulo}": Idade mínima recomendada é ${this.idadeMinima} anos.`;
  }
}

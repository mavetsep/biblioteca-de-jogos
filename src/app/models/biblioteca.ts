import { Jogo } from './jogo';

export class Biblioteca {
  private jogos: Jogo[] = [];

  adicionarJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  removerJogo(titulo: string): boolean {
    const index = this.jogos.findIndex(jogo => jogo.titulo === titulo);
    if (index >= 0) {
      this.jogos.splice(index, 1);
      return true;
    }
    return false;
  }

  listarJogos(): Jogo[] {
    return this.jogos;
  }
}

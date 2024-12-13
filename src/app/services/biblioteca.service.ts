import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private jogos: Jogo[] = [];

  adicionarJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  listarJogos(): Jogo[] {
    return this.jogos;
  }

  removerJogo(titulo: string): boolean {
    const index = this.jogos.findIndex(jogo => jogo.titulo === titulo);
    if (index >= 0) {
      this.jogos.splice(index, 1);
      return true;
    }
    return false;
  }
}

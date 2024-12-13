import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormJogoComponent } from '../../components/form-jogo/form-jogo.component';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Jogo } from '../../models/jogo';
import { DetalhesDialog } from '../../components/detalhes-dialog/detalhes-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FormJogoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  jogos: Jogo[] = [];

  constructor(
    private bibliotecaService: BibliotecaService,
    private dialog: MatDialog
  ) {
    this.jogos = this.bibliotecaService.listarJogos();
  }

  removerJogo(titulo: string): void {
    const sucesso = this.bibliotecaService.removerJogo(titulo);
    if (sucesso) {
      this.jogos = this.bibliotecaService.listarJogos();
    }
  }

  exibirDetalhes(jogo: Jogo): void {
    this.dialog.open(DetalhesDialog, { data: jogo });
  }
}

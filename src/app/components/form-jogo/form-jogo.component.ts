import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BibliotecaService } from '../../services/biblioteca.service';
import { JogoTabuleiro } from '../../models/jogo-tabuleiro';

@Component({
  selector: 'app-form-jogo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-jogo.component.html',
  styleUrls: ['./form-jogo.component.css'],
})
export class FormJogoComponent {
  titulo = '';
  fabricante = '';
  anoPublicacao = 0;
  numeroJogadores = 0;

  constructor(private bibliotecaService: BibliotecaService) {}

  adicionarJogo(): void {
    const novoJogo = new JogoTabuleiro(
      this.titulo,
      this.anoPublicacao,
      this.fabricante,
      this.numeroJogadores
    );
    this.bibliotecaService.adicionarJogo(novoJogo);
    this.limparFormulario();
  }

  private limparFormulario(): void {
    this.titulo = '';
    this.fabricante = '';
    this.anoPublicacao = 0;
    this.numeroJogadores = 0;
  }
}

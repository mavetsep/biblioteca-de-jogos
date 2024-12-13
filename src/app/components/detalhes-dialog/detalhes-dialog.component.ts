import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <h1 mat-dialog-title>Detalhes do Jogo</h1>
    <div mat-dialog-content>
      <p><strong>Título:</strong> {{ data.titulo }}</p>
      <p><strong>Fabricante:</strong> {{ data.fabricante }}</p>
      <p><strong>Ano de Publicação:</strong> {{ data.anoPublicacao }}</p>
      <ng-container *ngIf="'numeroJogadores' in data">
        <p><strong>Número de Jogadores:</strong> {{ data.numeroJogadores }}</p>
      </ng-container>
      <ng-container *ngIf="'idadeMinima' in data">
        <p><strong>Idade Mínima:</strong> {{ data.idadeMinima }}</p>
      </ng-container>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </div>
  `,
  styleUrls: ['./detalhes-dialog.component.css'],
})
export class DetalhesDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

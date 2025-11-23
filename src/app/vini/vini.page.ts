import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from'@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-vini',
  templateUrl: './vini.page.html',
  styleUrls: ['./vini.page.scss'], 
  standalone: true, 
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class ViniPage {
  public basePath = 'assets/vini/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    "IMG-20251123-WA0005.jpg",
    "IMG-20251123-WA0006.jpg",
    "IMG-20251123-WA0007.jpg",
    "IMG-20251123-WA0008.jpg",
    "IMG-20251123-WA0009.jpg",
    "IMG-20251123-WA0010.jpg",
    "IMG-20251123-WA0011.jpg"
  ];

  public caminhosDasFotos: string[] = [];

  // Variável para controlar quantas fotos estão visíveis (começa com 5)
  public limiteDeFotos: number = 3;

  // Variável para saber se o botão "Mostrar Mais" deve aparecer
  public mostrarBotao: boolean = false;

  constructor() { }

  ngOnInit() {
    // 1. Monta os caminhos completos
    this.caminhosDasFotos = this.nomesDasFotos.map(nomeArquivo => this.basePath + nomeArquivo);

    // 2. Verifica se o número total de fotos é maior que o limite inicial
    if (this.caminhosDasFotos.length > this.limiteDeFotos) {
      this.mostrarBotao = true;
    }
  }

  // Função para expandir o limite e mostrar todas as fotos
  mostrarTodasAsFotos() {
    this.limiteDeFotos = this.caminhosDasFotos.length; // Define o limite para o total de fotos
    this.mostrarBotao = false; // Esconde o botão após mostrar tudo
  }
}

export const ViniInfo = {
  name: "Vinicius Santos da Silva",
  age: 17,
  photo: "/assets/vini.jpg",
  path: "/vini"
};
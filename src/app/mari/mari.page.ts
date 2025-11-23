import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/angular/standalone'; // Adicionei IonButton

@Component({
  selector: 'app-mari',
  templateUrl: './mari.page.html',
  styleUrls: ['./mari.page.scss'], // Note que você precisará do .scss para o CSS
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class MariPage implements OnInit {

  public basePath = 'assets/mariF/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.22_a3b45486.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.23_21088aa2.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.23_61570b15.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.43_e26834f1.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.47_7efa7e8d.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.24_296af980.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.41.42_31c9e708.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.42.12_50268694.jpg',
    'Imagem do WhatsApp de 2025-10-23 à(s) 20.42.11_07a18d19.jpg',
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

export const MariInfo = {
  name: "Marielen da Silva Lopes",
  age: 20,
  photo: "/assets/mari.jpg",
  path: "/mari"
};
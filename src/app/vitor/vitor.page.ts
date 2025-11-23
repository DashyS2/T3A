import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/angular/standalone'; // Adicionei IonButton


@Component({
  selector: 'app-vitor',
  templateUrl: './vitor.page.html',
  styleUrls: ['./vitor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class VitorPage implements OnInit {

  public basePath = 'assets/vitin/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    'WhatsApp Image 2025-10-31 at 22.33.04.jpeg',
    'WhatsApp Image 2025-10-31 at 22.33.05 (1).jpeg',
    'WhatsApp Image 2025-10-31 at 22.33.05.jpeg',
    'WhatsApp Image 2025-10-31 at 22.33.06 (1).jpeg',
    'WhatsApp Image 2025-10-31 at 22.33.06.jpeg',
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

export const VitorInfo = {
  name: "Vitor Evander Lima dos Santos",
  age: 18,
  photo: "/assets/vitin.jpeg",
  path: "/vitor"
};
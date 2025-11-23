import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/angular/standalone'; // Adicionei IonButton


@Component({
  selector: 'app-sarah',
  templateUrl: './sarah.page.html',
  styleUrls: ['./sarah.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class SarahPage implements OnInit {

  public basePath = 'assets/saT/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    'WhatsApp Image 2025-11-03 at 07.45.11 (1).jpeg',
    'WhatsApp Image 2025-11-03 at 07.45.11.jpeg',
    'WhatsApp Image 2025-11-03 at 07.45.12 (1).jpeg',
    'WhatsApp Image 2025-11-03 at 07.45.12 (2).jpeg',
    'WhatsApp Image 2025-11-03 at 07.45.12.jpeg',
    'WhatsApp Image 2025-11-03 at 07.46.18.jpeg',
    'WhatsApp Image 2025-11-03 at 07.51.02.jpeg',
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

export const SarahInfo = {
  name: "Sarah da Silva Terra",
  age: 17,
  photo: "/assets/saT.jpeg",
  path: "/sarah"
};
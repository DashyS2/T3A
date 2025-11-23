import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/angular/standalone'; // Adicionei IonButton

@Component({
  selector: 'app-yasmin',
  templateUrl: './yasmin.page.html',
  styleUrls: ['./yasmin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class YasminPage implements OnInit {

  public basePath = 'assets/yas/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    'Imagem do WhatsApp de 2025-10-20 à(s) 17.31.36_ca74f8ca.jpg',
    'Imagem do WhatsApp de 2025-10-20 à(s) 17.31.37_af65625a.jpg',
    'Imagem do WhatsApp de 2025-10-20 à(s) 17.31.37_2dc485de.jpg',
    'Imagem do WhatsApp de 2025-10-20 à(s) 17.31.37_ec7a8591.jpg',
    'Imagem do WhatsApp de 2025-10-20 à(s) 17.31.37_4769113a.jpg',
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

export const YasInfo = {
  name: "Yasmin Bandeira Silva",
  age: 20,
  photo: "/assets/yas.jpg",
  path: "/yasmin"
};
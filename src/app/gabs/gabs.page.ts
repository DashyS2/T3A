import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/angular/standalone'; // Adicionei IonButton

@Component({
  selector: 'app-gabs',
  templateUrl: './gabs.page.html',
  styleUrls: ['./gabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonButton, CommonModule, FormsModule]
})
export class GabsPage implements OnInit {

  public basePath = 'assets/gabs/';

  // LISTA COMPLETA: Mantenha esta lista com o nome de TODAS as suas fotos
  public nomesDasFotos: string[] = [
    'Imagem do WhatsApp de 2025-11-18 à(s) 16.35.50_20e9e9ef.jpg' ,'Imagem do WhatsApp de 2025-11-18 à(s) 16.35.51_792f080d.jpg' ,'Imagem do WhatsApp de 2025-11-18 à(s) 16.35.51_6936fc55.jpg'
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

export const GabsInfo = {
  name: "Gabriel Teixeira Gonçalves",
  age: 20,
  photo: "/assets/gabs.jpg",
  path: "/gabs"
};

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Importações dos perfis individuais
// Cada página terá um export como este:
// export const AyslanInfo = { name, age, photo, path }
import { ViniInfo } from '../vini/vini.page';
import { MariInfo } from '../mari/mari.page';
import { YasInfo } from '../yasmin/yasmin.page';
import { RafaInfo } from '../rafa/rafa.page';
import { VitorInfo } from '../vitor/vitor.page';
import { SarahInfo } from '../sarah/sarah.page';
import { ClauInfo } from '../clau/clau.page';
import { DudaInfo } from '../duda/duda.page';
import { SarahRInfo } from '../sarahr/sarahr.page';
import { AyslanInfo } from '../ayslan/ayslan.page';
import { DanInfo } from '../dan/dan.page';
import { GabsInfo } from '../gabs/gabs.page';
import { AnaInfo } from '../ana/ana.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
})
export class HomePage implements OnInit {

  // Lista de perfis que aparecem na Home
public profiles = [
  ViniInfo,
  MariInfo,
  YasInfo,
  RafaInfo,
  VitorInfo,
  SarahInfo,
  ClauInfo,
  DudaInfo,
  SarahRInfo,
  AyslanInfo,
  DanInfo,
  GabsInfo,
  AnaInfo
];

  constructor() {}

  ngOnInit() {}
}

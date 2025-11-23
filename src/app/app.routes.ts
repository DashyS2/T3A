import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'vini',
    loadComponent: () => import('./vini/vini.page').then( m => m.ViniPage)
  },
  {
    path: 'mari',
    loadComponent: () => import('./mari/mari.page').then( m => m.MariPage)
  },
  {
    path: 'yasmin',
    loadComponent: () => import('./yasmin/yasmin.page').then( m => m.YasminPage)
  },
  {
    path: 'rafa',
    loadComponent: () => import('./rafa/rafa.page').then( m => m.RafaPage)
  },
  {
    path: 'vitor',
    loadComponent: () => import('./vitor/vitor.page').then( m => m.VitorPage)
  },
  {
    path: 'sarah',
    loadComponent: () => import('./sarah/sarah.page').then( m => m.SarahPage)
  },
  {
    path: 'clau',
    loadComponent: () => import('./clau/clau.page').then( m => m.ClauPage)
  },
  {
    path: 'duda',
    loadComponent: () => import('./duda/duda.page').then( m => m.DudaPage)
  },
  {
    path: 'sarahr',
    loadComponent: () => import('./sarahr/sarahr.page').then( m => m.SarahrPage)
  },
  {
    path: 'ayslan',
    loadComponent: () => import('./ayslan/ayslan.page').then( m => m.AyslanPage)
  },
  {
    path: 'dan',
    loadComponent: () => import('./dan/dan.page').then( m => m.DanPage)
  },
  {
    path: 'gabs',
    loadComponent: () => import('./gabs/gabs.page').then( m => m.GabsPage)
  },
  {
    path: 'ana',
    loadComponent: () => import('./ana/ana.page').then( m => m.AnaPage)
  },
];

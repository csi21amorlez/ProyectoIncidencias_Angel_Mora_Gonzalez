import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [{ path: '', component: MenuComponent },
{ path: 'IntroduccionIncidencias', loadChildren: () => import('../../Modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },
{ path: 'GestionIncidencias', loadChildren: () => import('../../Modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
{ path: 'RevisionIncidencias', loadChildren: () => import('../../Modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

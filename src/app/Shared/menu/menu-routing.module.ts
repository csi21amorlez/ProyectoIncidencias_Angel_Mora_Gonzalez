import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [

//Ruta vacía por defecto
{ path: '', component: MenuComponent },

//Ruta hacía el modulo de intrudcción de incidencias
{ path: 'IntroduccionIncidencias', loadChildren: () => import('../../Modules/introduccion-incidencias/introduccion-incidencias.module').then(m => m.IntroduccionIncidenciasModule) },

//Ruta hacía el modulo de gestión de incidencias
{ path: 'GestionIncidencias', loadChildren: () => import('../../Modules/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },

//Ruta hacía el modulo de revisión de incidencias
{ path: 'RevisionIncidencias', loadChildren: () => import('../../Modules/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

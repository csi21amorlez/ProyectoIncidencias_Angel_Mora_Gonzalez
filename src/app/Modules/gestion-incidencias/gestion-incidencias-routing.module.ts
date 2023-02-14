import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { MenuComponent } from '../menu/menu.component';
import { DetailIncidenciasComponent } from './detail-incidencias/detail-incidencias.component';



const routes: Routes = [{ path: '', component: GestionIncidenciasComponent },
{path:'Detalle/:id', component:DetailIncidenciasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }

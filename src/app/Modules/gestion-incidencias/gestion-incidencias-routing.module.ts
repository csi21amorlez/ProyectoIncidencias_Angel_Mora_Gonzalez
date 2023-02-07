import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { MenuComponent } from '../../Shared/menu/menu.component';

const routes: Routes = [{ path: '', component: MenuComponent },
{path:'GestionIncidencias/:id', component:GestionIncidenciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }

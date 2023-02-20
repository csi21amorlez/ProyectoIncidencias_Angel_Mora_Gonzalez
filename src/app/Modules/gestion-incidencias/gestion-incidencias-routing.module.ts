import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { MenuComponent } from '../menu/menu.component';
import { DetailIncidenciasComponent } from './detail-incidencias/detail-incidencias.component';
import { AuthGuard } from '../../auth.guard';



const routes: Routes = [{ path: '', component: GestionIncidenciasComponent, canActivate:[AuthGuard] },
{path:'Detalle/:id', component:DetailIncidenciasComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }

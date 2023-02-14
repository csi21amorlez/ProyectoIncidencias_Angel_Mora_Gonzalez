import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { MenuComponent } from '../menu/menu.component';
import { DetailIncidenciasComponent } from 'src/app/Modules/revision-incidencias/detail-incidencias/detail-incidencias.component';


const routes: Routes = [{ path: '', component: RevisionIncidenciasComponent },
{path:'Detalle/:id', component:DetailIncidenciasComponent}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionIncidenciasRoutingModule {}

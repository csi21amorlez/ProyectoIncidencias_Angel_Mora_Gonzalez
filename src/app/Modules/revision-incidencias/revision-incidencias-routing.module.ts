import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { MenuComponent } from '../../Shared/Components/menu/menu.component';
import { DetailIncidenciasComponent } from 'src/app/Shared/Components/detail-incidencias/detail-incidencias.component';
import { ListIncidenciasComponent } from 'src/app/Shared/Components/list-incidencias/list-incidencias.component';

const routes: Routes = [{ path: '', component: ListIncidenciasComponent },
{path:'Detalle/:id', component:DetailIncidenciasComponent}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionIncidenciasRoutingModule {}

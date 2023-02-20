import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { MenuComponent } from '../menu/menu.component';
import { DetailIncidenciasComponent } from 'src/app/Modules/revision-incidencias/detail-incidencias/detail-incidencias.component';
import { AuthGuard } from '../../auth.guard';


const routes: Routes = [{ path: '', component: RevisionIncidenciasComponent ,canActivate:[AuthGuard]},
{path:'Detalle/:id', component:DetailIncidenciasComponent, canActivate:[AuthGuard]}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionIncidenciasRoutingModule {}

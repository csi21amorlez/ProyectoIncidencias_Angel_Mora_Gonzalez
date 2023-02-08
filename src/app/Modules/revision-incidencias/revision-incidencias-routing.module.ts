import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { MenuComponent } from '../../Shared/menu/menu.component';

const routes: Routes = [{ path: '', component: RevisionIncidenciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionIncidenciasRoutingModule {}

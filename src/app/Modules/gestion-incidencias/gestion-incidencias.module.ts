import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { DetailIncidenciasComponent } from './detail-incidencias/detail-incidencias.component';
import { ListIncidenciasComponent } from './list-incidencias/list-incidencias.component';



@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    DetailIncidenciasComponent,
    ListIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule
  ]
})
export class GestionIncidenciasModule { }



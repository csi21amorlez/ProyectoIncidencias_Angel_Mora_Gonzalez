import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { DetailIncidenciasComponent } from 'src/app/Shared/Components/detail-incidencias/detail-incidencias.component';
import { ListIncidenciasComponent } from 'src/app/Shared/Components/list-incidencias/list-incidencias.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';




@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    DetailIncidenciasComponent,
    ListIncidenciasComponent,
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    NavbarModule,

  ]
})
export class GestionIncidenciasModule { }



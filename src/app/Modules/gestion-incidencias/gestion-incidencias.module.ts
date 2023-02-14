import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { DetailIncidenciasComponent } from './detail-incidencias/detail-incidencias.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestionIncidenciasComponent, DetailIncidenciasComponent],
  imports: [CommonModule, GestionIncidenciasRoutingModule, NavbarModule, FormsModule, ReactiveFormsModule],
})
export class GestionIncidenciasModule {}

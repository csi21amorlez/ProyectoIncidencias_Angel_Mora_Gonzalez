import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { NavbarModule } from '../navbar/navbar.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RevisionIncidenciasComponent, ],
  imports: [CommonModule, RevisionIncidenciasRoutingModule, NavbarModule, ReactiveFormsModule, FormsModule],
})
export class RevisionIncidenciasModule {}

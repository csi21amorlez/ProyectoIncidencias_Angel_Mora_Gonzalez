import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [RevisionIncidenciasComponent, ],
  imports: [CommonModule, RevisionIncidenciasRoutingModule, NavbarModule],
})
export class RevisionIncidenciasModule {}

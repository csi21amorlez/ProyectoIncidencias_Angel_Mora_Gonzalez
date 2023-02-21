import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    AdministracionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    NavbarModule
  ]
})
export class AdministracionModule { }

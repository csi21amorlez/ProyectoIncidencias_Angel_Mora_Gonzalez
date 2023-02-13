import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { NavbarModule } from '../../../Modules/navbar/navbar.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, NavbarModule],
})
export class MenuModule {}

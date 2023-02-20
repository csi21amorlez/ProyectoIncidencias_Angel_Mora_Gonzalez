import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { GestionIncidenciasComponent } from '../gestion-incidencias/gestion-incidencias.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  //Ruta vacía por defecto
  { path: '', component: MenuComponent, canActivate:[AuthGuard] },
  {
    path: 'logout',
    loadChildren: () =>
      import('../auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },

  //Ruta hacía el modulo de intrudcción de incidencias
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

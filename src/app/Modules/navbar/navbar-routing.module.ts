import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  {
    path: 'IntroduccionIncidencias',
    loadChildren: () =>
      import(
        '../introduccion-incidencias/introduccion-incidencias.module'
      ).then((m) => m.IntroduccionIncidenciasModule),
  },

  //Ruta hacía el modulo de gestión de incidencias
  {
    path: 'GestionIncidencias',
    loadChildren: () =>
      import('../gestion-incidencias/gestion-incidencias.module').then(
        (m) => m.GestionIncidenciasModule
      ),
  },

  //Ruta hacía el modulo de revisión de incidencias
  {
    path: 'RevisionIncidencias',
    loadChildren: () =>
      import('../revision-incidencias/revision-incidencias.module').then(
        (m) => m.RevisionIncidenciasModule
      ),
  },
  {
    path: 'logout',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Administracion',
    loadChildren: () =>
      import('../administracion/administracion.module').then(
        (m) => m.AdministracionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}

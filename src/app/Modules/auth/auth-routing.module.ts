import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'menu',
    loadChildren: () => import('../menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'introudccionIncidencias',
    loadChildren: () =>
      import(
        '../introduccion-incidencias/introduccion-incidencias.module'
      ).then((m) => m.IntroduccionIncidenciasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

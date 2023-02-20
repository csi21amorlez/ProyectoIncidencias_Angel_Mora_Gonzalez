import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'navbar',
    loadChildren: () =>
      import('./Modules/navbar/navbar.module').then((m) => m.NavbarModule), canActivate:[AuthGuard]
  },

  {
    path: '',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'logout',
    loadChildren:() =>
    import('./Modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

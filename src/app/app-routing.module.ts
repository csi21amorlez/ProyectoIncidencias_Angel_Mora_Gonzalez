import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./Shared/Components/menu/menu.module').then(m => m.MenuModule) },



{ path: 'navbar', loadChildren: () => import('./Modules/navbar/navbar.module').then(m => m.NavbarModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

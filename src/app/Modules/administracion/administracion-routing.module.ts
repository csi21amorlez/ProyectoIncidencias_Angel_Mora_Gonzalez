import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { DetailIncidenciasComponent } from '../gestion-incidencias/detail-incidencias/detail-incidencias.component';
import { AuthGuard } from '../../auth.guard';
import { DetailComponent } from './detail/detail.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [{ path: '', component: AdministracionComponent,  },
{path:'Detalle/:id', component:DetailComponent, canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

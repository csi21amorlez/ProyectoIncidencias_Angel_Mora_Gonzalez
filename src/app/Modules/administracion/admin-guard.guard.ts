import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from '../../Shared/Services/usuario.service';
import { Usuario } from '../../Shared/Interfaces/usuario';
import { AdministracionComponent } from './administracion.component';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  usuario:Usuario;

  constructor(private auth:AngularFireAuth, private router:Router, private service:UsuarioService){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.authState.pipe(take(1),
      map(user => {
        console.log(user.email);
        if (!user) {
          this.router.navigate(['/logout']);
          return false;
        } else {
          return true;
        }
      })
    );

  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, take, map, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from '../../Shared/Services/usuario.service';
import { Usuario } from '../../Shared/Interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class RevisorGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private service: UsuarioService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.authState.pipe(
      take(1),
      switchMap((user) => {
        console.log(user.email);
        return this.service.getAll().pipe(
          map((resp: any) => {
            const usuario = resp.find((u: Usuario) => u.email === user.email);
            if (usuario && (usuario.rol === 'Administrador' || usuario.rol === 'Revisor')) {
              return true;
            } else {
              alert('Usuario no autorizado');
              this.router.navigate(['/logout']);
              return false;
            }
          })
        );
      })
    );
  }
}

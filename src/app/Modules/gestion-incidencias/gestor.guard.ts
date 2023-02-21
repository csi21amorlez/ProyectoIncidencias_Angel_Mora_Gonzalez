import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, take, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from '../../Shared/Services/usuario.service';
import { Usuario } from '../../Shared/Interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class GestorGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private service: UsuarioService
  ) {}
  listUsuario: Usuario[];

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
      map((user) => {
        console.log(user.email);
        this.service.getAll().subscribe((resp: any) => {
          this.listUsuario = resp;
        });
        const usuario = this.listUsuario.filter(
          (usuario) => usuario.email === user.email
        )[0];
        if (usuario.rol != 'Administrador') {
          if (!user || usuario.rol != 'Gestor') {
            alert('Usuario no autorizado')
            this.router.navigate(['/logout']);
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      })
    );
  }
}

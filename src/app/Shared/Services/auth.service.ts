import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../Interfaces/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private userService: UsuarioService,
    private angularFireAuth: AngularFireAuth,
    private router:Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  // Sign up
  SignUp(usuario:Usuario):Promise<any> {
    console.log(usuario.email, usuario.password)
    return this.angularFireAuth
      .createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then((res) => {
        this.userService.addUsuario(usuario);
        this
        return true
      })
      .catch((error) => {
        return false});
  }

  // Sign In
  SignIn(mail: string, passw: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(mail, passw)
      .then(() => {
        this.router.navigate(['menu'])
      })
      .catch((error) => {
        return false;
      });
  }

  /* is Authenticated */
  isAuthenticated() {
    return this.angularFireAuth.authState;
  }

  /*  Sign Out  */
  SignOut() {
    this.angularFireAuth.signOut();
   
  }
}

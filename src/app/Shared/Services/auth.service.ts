import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Usuario } from '../Interfaces/usuario';
import { AuthData } from '../Interfaces/auth-data';
import { createUserWithEmailAndPassword, signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login({email, password}:AuthData){
    console.log('Logeado')
    try{
      return [true,signInWithEmailAndPassword(this.auth, email, password)];
    } catch {
      return false
    }

  }

  register({email, password}:AuthData){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logOut(){
    return signOut(this.auth);
  }


}

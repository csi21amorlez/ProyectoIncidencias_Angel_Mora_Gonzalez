import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';

@Injectable()
export class AuthService {
  user$: Observable<Usuario>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.switchMap((user) => {
      if (user) {
        return this.afs.doc<Usuario>(`users/${user.id}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider).then((credential) => {
      this.updateUserData(credential.user);
    });
  }

  signOut() {
    this.afAuth.signOut();
  }

  private updateUserData(user: Usuario) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.id}`
    );
    const data: Usuario = {
      id: user.id,
      email: user.email,
      nombre: user.nombre,
      clave: user.clave,
      rol: {
        subscriber: true,
      },
    };
    return userRef.set(data, { merge: true });
  }
}

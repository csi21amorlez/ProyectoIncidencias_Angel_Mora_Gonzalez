/*
*UsuarioService -->
Clase de servicio para la interfaz de usuario, aquí se especifica toda la lógica detras de la gestion de usuarios
de nuestra aplicacion
@csi21amorlez
*/

import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  where,
  docData,
} from '@angular/fire/firestore';
import { Usuario } from '../Interfaces/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private fire: Firestore, private af: AngularFirestore) {}

  coleccionUsuarios = collection(this.fire, 'Usuarios');
  usuario: Usuario;

  addUsuario(usuario: Usuario) {
    addDoc(this.coleccionUsuarios, usuario);
  }
  /*
  getUsuarioByMail(email: string) {
    console.log('[INFO] -- Entrando en getUsuarioByMail');
    return this.af
      .collection('Usuarios', (ref) => ref.where('email', '==', email).limit(1))
      .snapshotChanges()
      .pipe(
        map((snaps) => {
          const data = snaps[0].payload.doc.data();
          const id = snaps[0].payload.doc.id;
          return { id, ...(typeof data === 'object' && data !== null ? data : {}) };
        })
      );
  }
*/
  getUsuarioByMail(email: string) {
    return this.af
      .collection('users', (ref) => ref.where('email', '==', email).limit(1))
      .valueChanges();
  }

  getAll(): Observable<Usuario[]> {
    return collectionData(this.coleccionUsuarios, {
      idField: 'id',
    }) as Observable<Usuario[]>;
  }
  eliminar(docId: string) {
    return this.af.collection('Usuarios').doc(docId).delete();
  }

  getById(id: string) {
    return this.af.collection('Usuarios').doc(id).snapshotChanges();
  }
}

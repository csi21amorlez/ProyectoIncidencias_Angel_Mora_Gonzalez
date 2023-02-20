/*
*UsuarioService -->
Clase de servicio para la interfaz de usuario, aquí se especifica toda la lógica detras de la gestion de usuarios
de nuestra aplicacion
*/

import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Usuario } from '../Interfaces/usuario';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private fire: Firestore) {}

  coleccionUsuarios = collection(this.fire, 'Usuarios');

  addUsuario(usuario: Usuario) {
    addDoc(this.coleccionUsuarios, usuario);
  }
}

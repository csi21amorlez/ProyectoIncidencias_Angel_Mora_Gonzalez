/*
*UsuarioService -->
Clase de servicio para la interfaz de usuario, aquí se especifica toda la lógica detras de la gestion de usuarios
de nuestra aplicacion
*/

import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private fire:Firestore) { }
}

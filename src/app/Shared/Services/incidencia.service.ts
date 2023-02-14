/*
*IncidenciaService -->
Clase de servicio para la interfaz Incidencias, aqui se especifíca toda la lógica detras
de la gestion de base de datos de nuestra aplicacion.

@csi21amorlez
*/

import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Incidencias } from '../Interfaces/incidencias';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  private coleccionIncidencias: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore, private af: AngularFirestore) {
    //Establecemos la referencia a la base de datos de firebase
    this.coleccionIncidencias = collection(this.firestore, 'Incidencias');
  }

  //Obtiene todos los registros en base de datos
  getAll(): Observable<Incidencias[]> {
    return collectionData(this.coleccionIncidencias, {
      idField: 'id',
    }) as Observable<Incidencias[]>;
  }
  //Obtiene una incidencia por su id
  getById(id: string) {
    return this.af.collection('Incidencias').doc(id).snapshotChanges();

    /*

    return docData(REF, { idField: 'id' });
  */
  }
  //Elimina una incidencia de la base de datos
  delete(id: string) {
    return this.af.collection('Incidencias').doc(id).delete();
  }
  //Actualiza los datos de un registro existente en base de datos
  update(docId: string, incidencia: Incidencias) {
    return this.af.collection('Incidencias').doc(docId).update(incidencia);
  }
  //Crea un nuevo registro en base de datos
  create(incidencia: Incidencias) {
    return addDoc(this.coleccionIncidencias, incidencia);
  }
}

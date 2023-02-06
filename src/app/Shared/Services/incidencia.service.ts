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

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  private coleccionIncidencias: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    //Establecemos la referencia a la base de datos de firebase
    this.coleccionIncidencias = collection(this.firestore, 'Incidencias');
  }


  //Obtiene todos los registros en base de datos
  getAll() {
    return collectionData(this.coleccionIncidencias, {idField:'{uuid}'}) as Observable<Incidencias[]>;
  }
  //Obtiene una incidencia por su id
  getById(id: string) {
    const REF = doc(this.firestore, 'Incidencias/${id}');
    return docData(REF, { idField: 'id' });
  }
  //Elimina una incidencia de la base de datos
  delete(id: string) {
    const REF = doc(this.firestore, 'Incidencias/${id}');
    return deleteDoc(REF);
  }
  //Actualiza los datos de un registro existente en base de datos
  update(incidencia: Incidencias) {
    const REF = doc(this.firestore, 'Incidencias/${id}');
    return updateDoc(REF, { ...incidencia });
  }
  //Crea un nuevo registro en base de datos
  create(incidencia: Incidencias) {
    return addDoc(this.coleccionIncidencias, incidencia);
  }
}

import { Timestamp } from '@angular/fire/firestore';

//Clase modelo de incidencias
export interface Incidencias {
  uuid: string;
  fecha: string;
  lugarIncidencia: string;
  descIncidencia: string;
  posibleArreglo: string;
  estado: string;
  revisada: boolean;
}

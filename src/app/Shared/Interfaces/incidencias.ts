/*
Incidencias --> Clase modelo para la inserción en base de datos de incidencias
@csi21amorlez
*/


export interface Incidencias {
  uuid: string;
  fecha: string;
  lugarIncidencia: string;
  descIncidencia: string;
  posibleArreglo: string;
  estado: string;
  revisada: boolean;
}

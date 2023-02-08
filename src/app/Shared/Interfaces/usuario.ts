/*
Usuario --> Clase modelo para la gestion de usuarios en base de datos
@csi21amorlez
*/



export interface Usuario {
  id: string;
  nombre: string;
  clave: string;
  rol: number;
  descRol: string;
}

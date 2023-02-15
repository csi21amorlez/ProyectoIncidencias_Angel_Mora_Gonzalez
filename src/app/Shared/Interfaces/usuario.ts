import { Roles } from './roles';
/*
Usuario --> Clase modelo para la gestion de usuarios en base de datos
@csi21amorlez
*/

export interface Usuario {
  id: string;
  email:string
  nombre: string;
  clave: string;
  rol: Roles;

}

/*
RevisionIncidenciasComponent--> Clase controlador del componente RevisionIncidencias
se encarga principalmente de obtener todos los datos de la base de datos para
posteriormente mostralos por la vista
@csi21amorlez
*/
import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';
import { Incidencias } from '../../Shared/Interfaces/incidencias';
import { MenuComponent } from '../../Shared/menu/menu.component';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {

  listIncidencias: Incidencias[];


  constructor(private service: IncidenciaService) {}

  delete(incidencia:Incidencias){
    this.service.delete(incidencia.id);
  }

  ngOnInit(): void {
    //Obtenemos todos los registros de la base de datos para mostralo
    this.service.getAll().subscribe((incidencia) => {
      this.listIncidencias = incidencia;
    });
  }



}

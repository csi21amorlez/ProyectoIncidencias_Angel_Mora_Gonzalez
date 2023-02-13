import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../Shared/Services/incidencia.service';
import { Incidencias } from '../../../Shared/Interfaces/incidencias';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css'],
})
export class ListIncidenciasComponent implements OnInit {

  listIncidencias:Incidencias[];

  constructor(private service: IncidenciaService, private location:Location) {}



  ngOnInit(): void {
    //Obtenemos todos los registros de la base de datos para mostralo
    this.service.getAll().subscribe((incidencia) => {
      this.listIncidencias = incidencia;
    });
  }

  goBack(){
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';
import { Incidencias } from '../../Shared/Interfaces/incidencias';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css'],
})
export class GestionIncidenciasComponent implements OnInit {
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

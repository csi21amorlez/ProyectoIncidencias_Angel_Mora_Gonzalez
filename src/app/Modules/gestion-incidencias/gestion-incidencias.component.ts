import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';
import { Incidencias } from '../../Shared/Interfaces/incidencias';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {

  constructor(private service:IncidenciaService, private ruta:ActivatedRoute) { }

incidencia?:Incidencias;

  ngOnInit(): void {
    let id =this.ruta.snapshot.paramMap.get('id');
    console.log(id)
    this.incidencia = this.service.getById(id)[0];
  }

}

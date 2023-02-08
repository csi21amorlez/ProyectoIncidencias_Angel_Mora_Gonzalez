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
  constructor(private location:Location) {}

  ngOnInit(): void {}

  goBack(){
    this.location.back();
  }

}

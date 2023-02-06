import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';
import { Incidencias } from '../../Shared/Interfaces/incidencias';
import { Location } from '@angular/common';
import { MenuComponent } from '../../Shared/menu/menu.component';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {
  listIncidencias: Incidencias[];
  location: Location;

  constructor(private service: IncidenciaService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((incidencia) => {
      this.listIncidencias = incidencia;
    });
  }
}

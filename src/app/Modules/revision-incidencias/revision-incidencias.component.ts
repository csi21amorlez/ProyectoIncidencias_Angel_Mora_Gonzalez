/*
*RevisionIncidenciasComponent-->
Clase controlador del componente RevisionIncidencias
se encarga principalmente de obtener todos los datos de la base de datos para
posteriormente mostralos por la vista
@csi21amorlez
*/
import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';
import { Incidencias } from '../../Shared/Interfaces/incidencias';
import { MenuComponent } from '../menu/menu.component';
import { Location } from '@angular/common';
import { docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {
  listIncidencias: Incidencias[];
  listFiltro: string[] = ['Revisadas', 'Sin revisar', 'Todas'];
  incidenciasFiltradas: Incidencias[] = [];
  filtrado: string = 'Todas';

  constructor(private service: IncidenciaService, private location: Location) {}

  ngOnInit(): void {
    this.cambiarFiltro();
  }

  goBack(): void {
    this.location.back();
  }

  cambiarFiltro() {
    switch (this.filtrado) {
      case this.listFiltro[0]:
        this.listIncidencias = [];
        this.service.getIncidenciaByEstado(true).subscribe((resp: any) => {
          resp.forEach((incidenciasSnapshot: any) => {
            this.listIncidencias.push({
              ...incidenciasSnapshot.payload.doc.data(),
              id: incidenciasSnapshot.payload.doc.id,
            });
          });
        });
        break;

      case this.listFiltro[1]:
        this.listIncidencias = [];
        this.service.getIncidenciaByEstado(false).subscribe((resp: any) => {
          resp.forEach((incidenciasSnapshot: any) => {
            this.listIncidencias.push({
              ...incidenciasSnapshot.payload.doc.data(),
              id: incidenciasSnapshot.payload.doc.id,
            });
          });
        });
        break;

      case this.listFiltro[2]:
        console.log(this.listFiltro[2]);
        this.listIncidencias = [];
        this.service.getAll().subscribe((incidencia) => {
          this.listIncidencias = incidencia;
        });
        break;

      default:
        break;
    }
    {
    }
  }
}

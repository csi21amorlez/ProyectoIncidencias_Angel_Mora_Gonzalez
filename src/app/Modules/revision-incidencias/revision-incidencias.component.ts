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

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css'],
})
export class RevisionIncidenciasComponent implements OnInit {
  listIncidencias: Incidencias[];
  listFiltro: string[] = ['Revisadas', 'Sin revisar', 'Todas'];
  filtro: string = this.listFiltro[2];
  incidenciasFiltradas: Incidencias[];

  constructor(private service: IncidenciaService, private location: Location) {}

  ngOnInit(): void {
    //Obtenemos todos los registros de la base de datos para mostralo
    this.service.getAll().subscribe((incidencia) => {
      this.listIncidencias = incidencia;
    });
  }

  /* *Posible solucion al filtro
 this.listIncidencias.forEach((element) => {
        if (this.filtro == 'Revisadas') {
          if (element.revisada) this.incidenciasFiltradas.push(element);
        }
        if (this.filtro == 'Sin revisar') {
          if (!element.revisada) this.incidenciasFiltradas.push(element);
        } else {
          this.incidenciasFiltradas.push(element);
        }
      });

*/

  goBack(): void {
    this.location.back();
  }

  cambiarFiltro() {}
}

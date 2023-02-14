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
  incidenciasFiltradas: Incidencias[] = [];
  filtrado: string = 'Todas';


  constructor(private service: IncidenciaService, private location: Location) {}

  ngOnInit(): void {this.cambiarFiltro()}

  goBack(): void {
    this.location.back();
  }

  cambiarFiltro():number {
    this.service.getAll().subscribe((incidencia) => {
      this.incidenciasFiltradas = incidencia;
    });
    console.log(this.incidenciasFiltradas.length)

    //Mostramos las incidencias revisadas
    if(this.filtrado == 'Revisadas'){
      console.log(this.filtrado)
      this.listIncidencias = [];
      this.listIncidencias = this.incidenciasFiltradas.filter(x => x.revisada == true)
      console.log(this.listIncidencias[0].revisada)
      return 0;
    }
    //Mostramos las incidencias no revisadas
    if(this.filtrado = 'Sin revisar'){
      console.log(this.filtrado)
      this.listIncidencias = [];
      this.listIncidencias = this.incidenciasFiltradas.filter(x => x.revisada == false)
      console.log(this.listIncidencias[0].revisada)
      return 0;
    }
    if(this.filtrado = 'Todas'){
      console.log(this.filtrado)
      this.listIncidencias = [];
      this.listIncidencias = this.incidenciasFiltradas.filter(x => x.revisada != null)
      console.log(this.listIncidencias[0].revisada)
      return 0;
      }
      return null;
  }



}

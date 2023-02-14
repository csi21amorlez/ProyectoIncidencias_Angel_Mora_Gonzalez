import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../Shared/Services/incidencia.service';
import { ActivatedRoute } from '@angular/router';
import { Incidencias } from '../../../Shared/Interfaces/incidencias';
import {Location} from '@angular/common'

@Component({
  selector: 'app-detail-incidencias',
  templateUrl: './detail-incidencias.component.html',
  styleUrls: ['./detail-incidencias.component.css'],
})
export class DetailIncidenciasComponent implements OnInit {
  incidencia?: Incidencias;
  id: string;


  constructor(
    private service: IncidenciaService,
    private ruta: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.getById(this.id).subscribe((resp: any) => {
      this.incidencia = resp.payload.data();
    });
  }

  goBack(): void {
    this.location.back();
  }

  cambiarEstado(){
    if(!this.incidencia.revisada){
      this.id = this.ruta.snapshot.paramMap.get('id');
      this.incidencia.revisada = true;
      this.service.update(this.id, this.incidencia)
    }
  }
  delete(){

    this.id = this.ruta.snapshot.paramMap.get('id');
    this.service.delete(this.id)
    alert('Incidencia eliminada')
    this.location.back()
  }
}

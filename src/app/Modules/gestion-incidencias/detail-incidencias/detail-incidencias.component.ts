import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../Shared/Services/incidencia.service';
import { ActivatedRoute } from '@angular/router';
import { Incidencias } from '../../../Shared/Interfaces/incidencias';
import {Location} from '@angular/common'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-incidencias',
  templateUrl: './detail-incidencias.component.html',
  styleUrls: ['./detail-incidencias.component.css'],
})
export class DetailIncidenciasComponent implements OnInit {
  incidencia?: Incidencias;
  id: string;
  listEstados:string[] = ['Pendiente','Leida', 'Asignada', 'Comenzada', 'Terminada']
  optionEstado:string = '';



  constructor(
    private service: IncidenciaService,
    private ruta: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.service.getById(this.id).subscribe((resp: any) => {
      this.incidencia = resp.payload.data();
    });
  }

  goBack(): void {
    this.location.back();
  }

  cambiarEstado(){
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    console.log(this.optionEstado)
    this.incidencia.estado = this.optionEstado;
    this.service.update(this.id,this.incidencia);
    }

}

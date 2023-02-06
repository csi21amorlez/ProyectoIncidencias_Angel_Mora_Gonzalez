import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidenciaService } from '../../Shared/Services/incidencia.service';

@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css'],
})
export class IntroduccionIncidenciasComponent implements OnInit {
  formulario: FormGroup;

  constructor(private service: IncidenciaService) {
    this.formulario = new FormGroup({
      uuid: new FormControl(),
      fecha: new FormControl(),
      lugarIncidencia: new FormControl(),
      descIncidencia: new FormControl(),
      posibleArreglo: new FormControl(),
      estado: new FormControl(),
      revisada: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.service.create(this.formulario.value);
    alert('Incidencia creada correctamente');
  }
}
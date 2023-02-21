import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Shared/Services/usuario.service';
import { Usuario } from '../../Shared/Interfaces/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent implements OnInit {
  listUsuarios: Usuario[];
  usuario:Usuario;

  constructor(private service: UsuarioService, private location: Location) {}

  ngOnInit(): void {
    //Obtenemos todos los registros de la base de datos para mostralo
    this.service.getAll().subscribe((usuarios) => {
      this.listUsuarios = usuarios;
    });
  }

  goBack() {
    this.location.back();
  }
}

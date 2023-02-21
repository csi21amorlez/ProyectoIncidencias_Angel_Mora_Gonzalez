import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Shared/Services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/Shared/Interfaces/usuario';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string;
  usuario: Usuario;
  usuMail: Usuario;

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.service.getById(this.id).subscribe((resp: any) => {
      this.usuario = resp.payload.data();
    });
  }

  goBack() {
    this.location.back();
  }

  delete(id: string) {
    console.log(id);
    this.service.eliminar(id);
  }
  mostarOtro() {
    console.log('[INFO] -- Entrando en mostrar otro');
    this.service
      .getUsuarioByMail('angeloficial21@gmail.com')
      .subscribe((resp: any) => {
        
      });
  }
}

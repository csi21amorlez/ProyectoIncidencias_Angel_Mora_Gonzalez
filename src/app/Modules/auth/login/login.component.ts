import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../Shared/Services/auth.service';
import { Usuario } from '../../../Shared/Interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }
  formulario:FormGroup;

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  async onSubmit(){
   this.auth.SignIn(this.formulario.get('email').value, this.formulario.get('password').value).then(resp => {
    if(resp == true){
      console.log(resp)
      this.router.navigate(['/menu'])
    }
     if(resp==false){
      alert('Usuario no encontrado')
      console.log(resp)
      this.formulario.reset();
    }
   })




  }

}

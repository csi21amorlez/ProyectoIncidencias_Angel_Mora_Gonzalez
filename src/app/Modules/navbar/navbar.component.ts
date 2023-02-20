import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private router:Router) {}

  ngOnInit(): void {}

  logOut() {
    this.auth.SignOut();
    this.router.navigate['/logout']
    window.location.reload()
    console.log('Esto va')
  }
}

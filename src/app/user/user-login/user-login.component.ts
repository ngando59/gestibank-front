import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model: any = {}

  constructor(private router:Router) { }

  ngOnInit() {

  }

  connexion() {
    console.log('>>>>>>> Tentative de connexion');
    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    localStorage.setItem('user', JSON.stringify({login: this.model.email}));
    this.router.navigate(['']);
  }

}

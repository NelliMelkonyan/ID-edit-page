import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    mail : '',
    password : '',
    rememberMe : false
  }
  constructor(private  _router: Router) { }
  formSubmit () {
    if (this.login.mail === 'admin' && this.login.password === 'admin') {
      console.log('Hello admin !!!')
      this._router.navigate(['home'])

    } else {
      console.log('Who are you;')
    }
  }


  ngOnInit() {
  }

}

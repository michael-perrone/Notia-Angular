import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  // HELPERS

  login() {
    this.auth.login(this.model).subscribe(next => {
      console.log('yessir');
    }, error => {
      console.log('cooked');
    });
  }

}

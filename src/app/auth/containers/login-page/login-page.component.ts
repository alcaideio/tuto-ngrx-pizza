import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/user';
@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  template: `
    <h1>Login</h1>
    <login-form
      (login)="onLogin($event)"
      [errorMessage]="errorMessage"
    ></login-form>
  `,
})
export class LoginPageComponent implements OnInit {
  errorMessage = 'test';

  constructor() {}

  ngOnInit(): void {}

  onLogin(event: Credentials) {
    // this.store.dispatch(new fromStore.CreatePizza(event));
    console.log('onLogin', event);
  }
}

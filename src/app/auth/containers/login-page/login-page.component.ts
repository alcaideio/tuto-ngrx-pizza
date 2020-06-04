import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from '../../models/user';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  template: `
    <h1>Login</h1>
    <login-form
      (login)="onLogin($event)"
      [errorMessage]="error$ | async"
    ></login-form>
  `,
})
export class LoginPageComponent implements OnInit {
  error$ = this.store.select(fromStore.selectLoginPageError);

  constructor(private store: Store<fromStore.AuthState>) {}

  ngOnInit(): void {}

  onLogin(credentials: Credentials) {
    this.store.dispatch(fromStore.login({ credentials }));
    console.log(credentials);
  }
}

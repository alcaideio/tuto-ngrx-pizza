import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../../models/user';
import { AuthService } from '../../services';
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
  error$: Observable<string>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogin(credentials: Credentials) {
    // this.store.dispatch(LoginPageActions.login({ credentials }));
    this.authService.login(credentials);
    console.log(credentials);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Credentials, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(credentials: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (credentials.username.length < 2 && credentials.password !== 'test') {
      return throwError('Invalid username or password');
    } else {
      return of({ name: credentials.username });
    }
  }

  logout() {
    return of(true);
  }
}

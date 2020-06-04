import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromRoot from '../../../store';
import { Credentials, User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import * as fromAuthActions from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(fromAuthActions.login),
    map((action) => action.credentials),
    switchMap((auth: Credentials) =>
      this.authService.login(auth).pipe(
        map((user: User) => fromAuthActions.loginSuccess({ user })),
        catchError((error) => of(fromAuthActions.loginFailure({ error })))
      )
    )
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(fromAuthActions.logout),
    map((authed) => new fromRoot.Go({ path: ['/login'] }))
  );
}

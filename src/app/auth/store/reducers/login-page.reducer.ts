import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';

export interface State {
  error: string | null;
}

export const initialState: State = {
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.login, (state) => ({
    ...state,
    error: null,
  })),

  on(fromActions.loginSuccess, (state) => ({
    ...state,
    error: null,
  })),
  on(fromActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const getError = (state: State) => state.error;

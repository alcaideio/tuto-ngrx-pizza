import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.login, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),

  on(fromActions.loginSuccess, (state) => ({
    ...state,
    error: null,
    pending: false,
  })),
  on(fromActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;

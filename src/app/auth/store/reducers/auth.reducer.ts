import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import * as fromActions from '../actions';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(fromActions.logout, () => initialState)
);

export const getUser = (state: State) => state.user;

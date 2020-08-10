import { UserData } from '../Models/AuthenticationModel/User.Model';
import { ActionReducerMap } from '@ngrx/store';
import * as authenticationState from './Auth.Reducer';
import { AuthState } from './Auth.Reducer';

export interface Auth {
    user: UserData,
    accessToken: string,
    idToken: string
}

export interface AuthenticationState {
    authentication: AuthState
}

export const reducers: ActionReducerMap<AuthenticationState> = {
    authentication: authenticationState.reducer
};
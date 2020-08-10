import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectEntities, AuthState } from './Auth.Reducer';


export const authFeatureSelector = createFeatureSelector<any>("authentication");

export const authSelector = createSelector(
    authFeatureSelector,
    (state) => state.authentication
)

export const userCredientials = createSelector(
    authSelector,
    (state) => state.entities
)

export const accessToken = createSelector(
    userCredientials,
    (state) => state.accessToken
)

export const idToken = createSelector(
    userCredientials,
    (state) => state.idToken
)

export const user = createSelector(
    userCredientials,
    (state) => state.user
)

export const isLoading = createSelector(
    authSelector,
    (state) => state.showLoader
)

export const isLoggedIn = createSelector(
    userCredientials,
    (state) => state.isLoggedIn
)
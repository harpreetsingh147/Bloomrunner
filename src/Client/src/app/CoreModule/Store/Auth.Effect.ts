/* angular core */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './Auth.Actions';
import * as snackBarActions from '../../Store/SnackBarReducer/Facade/SnackBar.Actions';
/* rxjs */
import { switchMap, tap, map, exhaustMap, catchError, startWith, delay, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
/* models */
import { SnackBarModel, NotificationType } from 'src/app/Store/SnackBarReducer/Models/SnackBar.model';
import * as msges from '../Models/Const/AuthMessages';
/* services */
import { AuthService } from '../Services/AuthService';
import { RegisterService } from '../Services/RegisterService';


@Injectable()
export class AuthEffect {
    constructor(private actions$: Actions, private route: Router, private registerService: RegisterService, private authService: AuthService) { }

    public login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.LoginRequest),
        tap(() => this.authService.signIn())
    ), ({ dispatch: false }));

    public loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.LoginProceed),
        exhaustMap(() => this.authService.identityModel().pipe(
            map(payload => payload),
            switchMap(payload => of(authActions.LoginSuccess({ userAndToken: payload }))),
            catchError((error) => of(authActions.RegisterFailed({ error: error })))
        )), tap(() => {
            this.route.navigate(["/welcome"]);
        })), ({ dispatch: true }));

    public register$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.RegisterRequest),
        map(action => action.payload),
        delay(3000),
        exhaustMap((payload) => this.registerService.create(payload).pipe(
            switchMap((payload) => [
                authActions.RegisterSuccess({ payload: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel(msges.RegisterSuccess, NotificationType.Success) }),
            ]), catchError((error: any) => of(authActions.RegisterFailed(error)))
        )), tap(() => {
            this.route.navigate(["/login"]);
        })), ({ dispatch: true }));

    public logOut$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.LogoutRequest),
        tap(() => { 
            this.authService.logOut();
            localStorage.removeItem("authentication");
         })
    ), ({ dispatch: false }));
}
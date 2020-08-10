/* angular core modules */
import { Injectable } from '@angular/core';
import { tap,map } from 'rxjs/operators';

/* ngrx actions and effects*/
import * as snackBarActions from './SnackBar.Actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

/* services */
import { SnackBarService } from '../Service/SnackBar.Service';

@Injectable()
export class SnackBarEffects {
    constructor(private actions$: Actions, private service: SnackBarService) { }

    //open snackbar and pass payload
    public openSnackBar$ = createEffect(() => this.actions$.pipe(
        ofType(snackBarActions.ShowNotification),
        map(action => action.payload),
        tap((payload) => { this.service.showSnackBar(payload) })
    ), { dispatch: false });
    
     //close snackbar
    public closeSnackBar$ = createEffect(() => this.actions$.pipe(
        ofType(snackBarActions.HideNotification),
        tap(() => this.service.hideSnackBar())
    ), { dispatch: false });
}
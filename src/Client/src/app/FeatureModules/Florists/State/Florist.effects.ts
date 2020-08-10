/* angular core modules */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, exhaustMap, startWith, catchError, switchMap, mergeMap, delay } from 'rxjs/operators';

/* Ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as floristActions from '../State/Florist.actions';
import * as snackBarActions from '../../../Store/SnackBarReducer/Facade/SnackBar.Actions';

/* models */
import { FloristRequestModel } from '../Models/FloristRequestModel';
import { SnackBarModel, NotificationType } from 'src/app/Store/SnackBarReducer/Models/SnackBar.model';
import * as msges from '../Const/FlorirstMessage';

/* services */
import { FloristService } from '../Services/Florist.service';



@Injectable()
export class FloristEffects {
    constructor(private actions$: Actions, private service: FloristService, private router: Router) { }

    //Load florist remotely and update state in store
    public loadFlorists$ = createEffect(() => this.actions$.pipe(
        ofType(floristActions.FloristLoadRequest),
        startWith(floristActions.FloristLoadRequest),
        exhaustMap(() => this.service.List(new FloristRequestModel()).pipe(
            switchMap((florists) => [
                floristActions.floristsLoadedSuccess({ florists })
            ]), catchError((error: any) => of(floristActions.floristsLoadedFailed(error)))
        ))), { dispatch: true })

    //create new florist
    //payload: florist model
    public createFlorist$ = createEffect(() => this.actions$.pipe(
        ofType(floristActions.FloristPostRequest),
        map(action => action.florist),
        delay(2000),
        switchMap((payload) => this.service.Add(payload).pipe(
            mergeMap((payload) => [
                floristActions.FloristPostSuccess({ florist: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel(msges.posted, NotificationType.Success) }),
            ]), catchError((error: any) => of(floristActions.FloristPostFailed(error)))
        ))
    ), { dispatch: true })

    //delete florist
    //payload : florist id
    public deleteFlorist$ = createEffect(() => this.actions$.pipe(
        ofType(floristActions.FloristDeleteRequest),
        map(action => action.floristId),
        switchMap((action) => this.service.Delete(action).pipe(
            delay(2000),
            mergeMap((payload) => [
                floristActions.FloristDeleteSuccess({ floristId: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel(msges.deleted, NotificationType.Success) }),
            ]), catchError((error: any) => of(floristActions.FloristDeleteFailed(error)))
        ))), { dispatch: true })

    //update florist
    //payload : Update<Florist>
    publicupdateFlorist$ = createEffect(() => this.actions$.pipe(
        ofType(floristActions.FloristUpdateRequest),
        map(action => action.update),
        delay(2000),
        switchMap((action) => this.service.Update(action.id, action.changes).pipe(
            mergeMap((payload) => [
                floristActions.FloristUpdateSuccess({ payload: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel(msges.updated, NotificationType.Success) })
            ]), catchError((error: any) => of(floristActions.FloristUpdateFailed({ error: error })))
        ))), { dispatch: true })
}
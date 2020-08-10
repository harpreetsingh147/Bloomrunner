/* angular core modules */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* rxjs */
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

/* ngrx */
import { select, Store } from '@ngrx/store';
import { areFloristsLoaded } from '../State/Florist.selectors';
import { FloristLoadRequest } from '../State/Florist.actions';
import { FloristState } from '../State/Florst.reducer';

@Injectable()
export class FloristsResolver implements Resolve<Observable<any>> {

    constructor(private store: Store<FloristState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(select(areFloristsLoaded), tap((floristsLoaded) => {
            if (!floristsLoaded) {
                this.store.dispatch(FloristLoadRequest());
            }
        }), filter(floristsLoaded => floristsLoaded),first());
    }
}
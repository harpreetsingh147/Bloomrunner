/* angular core modules */
import { Component } from '@angular/core';

/* ngrx */
import { Store } from '@ngrx/store';
import { AuthState } from '../../Store/Auth.Reducer';
import { Observable } from 'rxjs';
import * as authSelectors from '../../Store/Auth.Selectors'
import * as authActions from '../../Store/Auth.Actions';


@Component({
    selector: 'app-header',
    templateUrl: './Header.Component.html',
    styleUrls: ['./Header.Component.scss']
})
export class HeaderComponent {

    public isLoggedIn$: Observable<any>;
    public userData: any;

    constructor(private store: Store<AuthState>) {
        this.isLoggedIn$ = this.store.select(authSelectors.isLoggedIn);
        this.store.select(authSelectors.user).subscribe(user => {
           this.userData=user;
        });
    }

    public logOut(): void {
        this.store.dispatch(authActions.LogoutRequest());
    }
}
/* angular core modules */
import { Component, OnInit } from '@angular/core';
/* ngrx */
import * as authActions from '../../Store/Auth.Actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../Store/Auth.Reducer';
/* services */
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'app-login',
    templateUrl: './Login.Component.html',
    styleUrls: ['./Login.Component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private store: Store<AuthState>, private oidcSecurityService: OidcSecurityService) { }

    ngOnInit() {
        this.oidcSecurityService.checkAuth().subscribe(autenticated => {
            if (autenticated)
                this.store.dispatch(authActions.LoginProceed())
        })
    }

    public Login(): void {
        this.store.dispatch(authActions.LoginRequest());
    }
}
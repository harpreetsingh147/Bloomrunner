/* angular core modules */
import { Injectable } from '@angular/core';
/* rxjs */
import { Observable, of } from 'rxjs';
/* external modules */
import { OidcSecurityService } from 'angular-auth-oidc-client';
/* models */
import { IdentityModel } from '../Models/AuthenticationModel/Identity.Model';


@Injectable()
export class AuthService {
    constructor(private oidcService: OidcSecurityService) { }

    public signIn(): void {
        this.oidcService.authorize();
    }
    public isAuthorize(): boolean {
        let isLoggedIn: boolean = false;
        this.oidcService.checkAuth().subscribe(response => {
            isLoggedIn = response;
        });
        return isLoggedIn;
    }
    public accessToken(): string {
        return this.oidcService.getToken();
    }
    public idToken(): string {
        return this.oidcService.getIdToken();
    }
    public refreshToken(): string {
        return this.oidcService.getRefreshToken();
    }
    public logOut(): void {
        this.oidcService.logoff();
    }
    public getUserData() {
        let user = {};
        this.oidcService.userData$.subscribe(res => {
            user = res;
        });
        return user;
    }
    public identityModel(): Observable<IdentityModel> {
        const user = this.getUserData();
        const idToken = this.idToken();
        const isLoggedIn = this.isAuthorize();
        const accessToken = this.accessToken();
        const returnModel = new IdentityModel(user, isLoggedIn, accessToken, idToken);
        return of(returnModel);
    }
}
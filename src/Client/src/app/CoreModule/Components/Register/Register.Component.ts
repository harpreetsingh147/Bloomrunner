/* angular core modules */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
/* rxjs */
import { Observable } from 'rxjs';

/* models */
import { RegisterModel, UserModel } from '../../Models/RegisterModel/RegisterModel';

/* ngrx */
import { Store } from '@ngrx/store';
import { AuthState } from '../../Store/Auth.Reducer';
import * as authActions from '../../Store/Auth.Actions';
import { isLoading } from '../../Store/Auth.Selectors';


@Component({
    selector: 'app-register',
    templateUrl: './Register.Component.html',
    styleUrls: ['./Register.Component.scss']
})
export class RegisterComponent {

    public model: RegisterModel = new RegisterModel();
    public user: UserModel = new UserModel();
    public isLoaded$: Observable<boolean>;
    constructor(private store: Store<AuthState>, private router: Router) {
        this.isLoaded$ = this.store.select(isLoading);
    }

    public onSubmit(f: NgForm): void {
        this.model.User = this.user;
        this.store.dispatch(authActions.RegisterProcessing())
        this.store.dispatch(authActions.RegisterRequest({ payload: this.model }))
    }
}

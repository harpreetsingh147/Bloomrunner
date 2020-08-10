/* angular core modules */
import { Component } from '@angular/core';

/* rxjs */
import { Observable } from 'rxjs';

/* ngrx */
import { Store } from '@ngrx/store';
import { AuthState } from '../../Store/Auth.Reducer';
import { user } from '../../Store/Auth.Selectors';

/* models */
import { UserData } from '../../Models/AuthenticationModel/User.Model';

@Component({
    selector: 'app-welcome',
    templateUrl: './Welcome.Component.html',
    styleUrls: ['./Welcome.Component.scss']
})
export class WelcomeComponent {
    public user$: Observable<UserData>;
    
    constructor(private store: Store<AuthState>) {
        this.user$ = this.store.select(user)
    }

  
}
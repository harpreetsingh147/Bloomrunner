/* angular core modules */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/* angular material */
import { MatSnackBar } from '@angular/material/snack-bar';

/* model and properties */
import { SnackBarModel } from '../Models/SnackBar.model';

/* components */
import { SnackBarComponent } from '../Component/SnackBar.component';


@Injectable()
export class SnackBarService {
    constructor(private snackbar: MatSnackBar) { }

    public showSnackBar(payload:SnackBarModel) {
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: {payload},
            duration: 3000
        })
        return of("success")
    }
    
    public hideSnackBar() {
        this.snackbar.dismiss();
    }
}
/* angular core module */
import { Component, Inject } from '@angular/core';

/* material module */
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

/* models */
import { SnackBarModel } from '../Models/SnackBar.model';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './SnackBar.component.html',
    styleUrls: ['./SnackBar.component.scss']
})
export class SnackBarComponent {
    //models and properties
    public notifaction: SnackBarModel;


    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.notifaction = data.payload;
    }
}
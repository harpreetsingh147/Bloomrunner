/* anglar core modules */
import { Component, Inject } from '@angular/core';
/* models */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Florist } from '../../Models/Florist';

@Component({
    selector: 'app-update-florist-modal',
    templateUrl: './UpdateFlorist.component.html',
    styleUrls: ['./UpdateFlorist.component.scss']
})
export class UpdateFloristComponent {
    /* initializations properties */
    public model:Florist=new Florist();
    
    constructor(private dialogRef: MatDialogRef<UpdateFloristComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.model = data;
    }

    public closeDialog(): void {
        this.dialogRef.close();
    }

    public onUpdate(): void {
        this.dialogRef.close({ data: this.model })
    }
}
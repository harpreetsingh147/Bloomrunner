/* core modules */
import { Component, Inject } from '@angular/core';

/* models */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Florist } from '../../Models/Florist';


@Component({
    selector: 'app-add-new-florist',
    templateUrl: './AddNewFloristModel.component.html',
    styleUrls: ['./AddNewFloristModel.component.scss']
})
export class AddNewFloristComponent {
    public model:Florist=new Florist();

    constructor(private dialogRef: MatDialogRef<AddNewFloristComponent>,
        @Inject(MAT_DIALOG_DATA) data) { }

    public closeDialog():void {
        this.dialogRef.close();
    }
    public onSubmit():void {
        this.dialogRef.close({ data: this.model })
    }
}
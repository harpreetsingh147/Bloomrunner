/* angular core modules */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* material modules */

@Component({
    selector: 'app-delete-florist-modal',
    templateUrl: './DeleteFlorist.component.html',
    styleUrls: ['./DeleteFlorist.component.scss']
})
export class DeleteFloristComponent {

    constructor(private dialogRef: MatDialogRef<DeleteFloristComponent>,
        @Inject(MAT_DIALOG_DATA) data) { }

    public ConfirmDelete(): void {
        this.dialogRef.close(true);
    }

    public closeDialog(): void {
        this.dialogRef.close(false);
    }
}
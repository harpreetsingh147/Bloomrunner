/* angular core modules */
import { Component, Input, Output, EventEmitter, OnInit, SimpleChange } from '@angular/core';

/* angular material components */
import { MatTableDataSource } from '@angular/material/table';

/* models */
import { Florist } from '../../Models/Florist';

@Component({
    selector: 'app-florist-list',
    templateUrl: './FloristList.component.html',
    styleUrls: ['./FloristList.component.scss']
})
export class FloristListComponent {

    /* models and properties */
    public displayedColumns: string[] = ['firstName', 'lastName', 'class', 'subject', 'marks', 'actions'];
    public dataSource: MatTableDataSource<Florist>;
    @Input() public result: Array<Florist>;
    @Input() public isLoading: boolean;
    @Output() public onUpdated: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onDeleted: EventEmitter<number> = new EventEmitter<number>();

   
    ngOnChanges(changes: { any: SimpleChange }) {
        //if (changes['result']["currentValue"]) {
            this.dataSource = new MatTableDataSource(this.result);
        //}
    }

    //update florist method
    public updateFlorist(row) {
        this.onUpdated.emit(row);
    }

    //delete florist method
    public deleteFlorist(id) {
        this.onDeleted.emit(id);
    }
}
/* angular core modules */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

/* material modules */
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

/* models */
import { Florist } from '../Models/Florist';

/* components */
import { DeleteFloristComponent } from '../Modals/DeleteFlorist/DeleteFlorist.component';
import { UpdateFloristComponent } from '../Modals/UpdateFlorist/UpdateFlorist.component';
import { BaseComponent } from 'src/app/BaseComponent/BaseComponent';
import { AddNewFloristComponent } from '../Modals/AddNewFlorist/AddNewFloristModel.component';

/* Ngrx status */
import { Store } from '@ngrx/store';
import { FloristState } from '../State/Florst.reducer';
import { florists, areFloristsLoaded, isLoading, showError } from '../State/Florist.selectors';
import * as floristActions from '../State/Florist.actions';
import { Update } from '@ngrx/entity';
import * as authActions from '../../../CoreModule/Store/Auth.Actions';

@Component({
    selector: 'table-overview-example',
    styleUrls: ['./Florists.Component.scss'],
    templateUrl: './Florists.Component.html',
})
export class FloristComponent extends BaseComponent implements OnInit {

    /* view models */
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    /* models and properties */
    public florists$: Observable<Florist[]>;
    public isLoaded$: Observable<boolean>;
    public isLoading$: Observable<boolean>;
    public anyError$: Observable<any>;
    public firstFlorist$: Observable<any>;
    constructor(
        private store: Store<FloristState>,
        private router: Router,
        public dialog: MatDialog) {
        super();
    }
    ngOnInit() {
        this.florists$ = this.store.select(florists);
        this.isLoaded$ = this.store.select(areFloristsLoaded);
        this.isLoading$ = this.store.select(isLoading);
        this.anyError$ = this.store.select(showError);
        
    }

    public addFlorist(): void {
        const addDialogRef = this.dialog.open(AddNewFloristComponent, {
            width: '640px', disableClose: true
        });
        addDialogRef.afterClosed().subscribe((florist: Florist) => {
            if (florist) {
                this.store.dispatch(floristActions.ShowLoader())
                this.store.dispatch(floristActions.FloristPostRequest({ florist }))
            }
        });
    }

    public updateFlorist(florist: Florist): void {
        const addDialogRef = this.dialog.open(UpdateFloristComponent, {
            width: '640px', disableClose: true,
            data: JSON.parse(JSON.stringify(florist))
        });
        addDialogRef.afterClosed().subscribe((updateModel: Florist) => {
            if (updateModel) {
                const update: Update<Florist> = {
                    id: updateModel.subjectId,
                    changes: {
                        ...updateModel,
                    }
                };
                this.store.dispatch(floristActions.ShowLoader());
                this.store.dispatch(floristActions.FloristUpdateRequest({ update }));
            }
        });
    }

    public deleteFlorist(floristId: number): void {
        const deleteDialogRef = this.dialog.open(DeleteFloristComponent, {
            width: '640px', disableClose: true
        });
        deleteDialogRef.afterClosed().subscribe(deleted => {
            if (deleted) {
                this.store.dispatch(floristActions.ShowLoader());
                this.store.dispatch(floristActions.FloristDeleteRequest({ floristId }));
            }
        });
    }
    public logout():void{
        this.store.dispatch(authActions.LogoutRequest());
    }
}



/* angualr core modules */
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* florist modules */
import { FloristsRoutingModule } from './Florist.routing.module';

/* feature and custom modules */
import { MaterialModule } from 'src/app/MaterialModule/Material.module';

/* components */
import { DeleteFloristComponent } from './Modals/DeleteFlorist/DeleteFlorist.component';
import { UpdateFloristComponent } from './Modals/UpdateFlorist/UpdateFlorist.component';
import { FloristListComponent } from './Component/FloristList/FloristList.component';
import { AddNewFloristComponent } from './Modals/AddNewFlorist/AddNewFloristModel.component';
import { FloristComponent } from './Component/Florists.Component';

/* ngrx */
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './State/Florst.reducer';
import { StoreModule } from '@ngrx/store';
import { FloristEffects } from './State/Florist.effects';

/* services */
import { SearchService } from './Services/SearchService';
import { FloristService } from './Services/Florist.service';

/* pipes */
import { CustomizeClassPipe } from './Pipe/classPipe';

/* route resolvers */
import { FloristsResolver } from './RouteResolver/florist.route-resolver';


@NgModule({
  declarations: [
    FloristComponent,
    FloristListComponent,
    AddNewFloristComponent,
    DeleteFloristComponent,
    UpdateFloristComponent,
    CustomizeClassPipe,
  ],
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    StoreModule.forFeature("florists", reducer),
    EffectsModule.forFeature([FloristEffects]),
    FloristsRoutingModule,
  ],
  providers: [FloristService, SearchService, FloristsResolver],
  entryComponents: [AddNewFloristComponent, UpdateFloristComponent, DeleteFloristComponent]
})
export class FloristModule { }
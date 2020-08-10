/* core modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* components */
import { CategoryDashboardComponent } from './Components/Dashboard/CategoryDashboard.Component';
import { DeleteConfirmationComponent } from './Modals/DeleteConfirmation/DeleteConfirmation.component';

/* services */
import { CategoryServices } from './Services/Category.Service';

/* pipes */
import { CategoryDateFormatPipe } from './Pipes/CategoryDate.Pipe';

/* directieves */
import { HideDescriptionDirective } from './Directives/HideDescription.Directive';

/* route guards */
import { CanActivateCategory } from './RouteGuards/CategoryAuth.Guard';
import { CanReloadAuthGuard } from './RouteGuards/CanReloadPage.Guard';

/* route resolvers */
import { GetCategoriesRouteResolve } from './RouteResolvers/GetCategories.Resolve';

/* modules */
import { CategoryRoutingModule } from './Categories.Routing.Modules';
import { CategoryPresentationComponent } from './Components/CategoryList/CategoryPresentation/CategoryPresentation.Component';
import { CategoryListComponent } from './Components/CategoryList/CategoryList.Component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryPresentationComponent,
    CategoryDashboardComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    CategoryRoutingModule
  ],
  providers: [
    CategoryServices,
    CategoryDateFormatPipe,
    CanActivateCategory,
    CanReloadAuthGuard,
    HideDescriptionDirective,
    GetCategoriesRouteResolve],
  bootstrap: [],
  entryComponents:[DeleteConfirmationComponent]
})
export class CategoryModule { }

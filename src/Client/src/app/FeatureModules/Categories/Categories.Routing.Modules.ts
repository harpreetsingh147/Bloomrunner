/* angular core modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { CategoryDashboardComponent } from './Components/Dashboard/CategoryDashboard.Component';
import { CategoryListComponent } from './Components/CategoryList/CategoryList.Component';

/* route guards */
import { CanActivateCategory } from './RouteGuards/CategoryAuth.Guard';
import { CanReloadAuthGuard } from './RouteGuards/CanReloadPage.Guard';

/* route resolvers */
import { GetCategoriesRouteResolve } from './RouteResolvers/GetCategories.Resolve';



const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:CategoryDashboardComponent},
    {
        path:'list',
        component:CategoryListComponent,
        canActivate:[CanActivateCategory],
        canDeactivate:[CanReloadAuthGuard],
        resolve: {
            categoryList:GetCategoriesRouteResolve
        }
    },
    {
        path:'update',
        component:CategoryListComponent,
        canActivate:[CanActivateCategory],
        canDeactivate:[CanReloadAuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

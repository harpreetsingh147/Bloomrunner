/* angular core modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { FloristComponent } from './Component/Florists.Component';

/* route resolvers */
import { FloristsResolver } from './RouteResolver/florist.route-resolver';

/* components */
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path:'list',component:FloristComponent,resolve:{florist:FloristsResolver}},
  { path:'list/:id',component:FloristComponent,resolve:{florist:FloristsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloristsRoutingModule { }

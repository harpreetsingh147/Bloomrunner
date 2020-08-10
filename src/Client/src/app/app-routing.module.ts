/* core modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { LoginComponent } from './CoreModule/Components/Login/Login.Component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './CoreModule/Components/Register/Register.Component';
import { WelcomeComponent } from './CoreModule/Components/Welcome/Welcome.Component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'florists', loadChildren: () => import('./FeatureModules/Florists/Florist.module').then(m => m.FloristModule) }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

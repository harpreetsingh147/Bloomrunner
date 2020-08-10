/* angualr core modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';

/* components */
import { AppComponent } from './app.component';
import { SnackBarComponent } from './Store/SnackBarReducer/Component/SnackBar.component';

/* custom modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './CoreModule/Core.Modules';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloristModule } from './FeatureModules/Florists/Florist.module';

/* services */
import { SnackBarService } from './Store/SnackBarReducer/Service/SnackBar.Service';

/* pipes */
import { SnackbarNotificationPipe } from './Store/SnackBarReducer/pipes/snackbar.pipe';

/* Ngrx */
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './MaterialModule/Material.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SnackBarEffects } from './Store/SnackBarReducer/Facade/SnackBar.Effects';

/* environment variables */
import { environment } from 'src/environments/environment';
import { configureAuth } from './Oidc.Configuration';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    SnackbarNotificationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    MaterialModule,
    AppRoutingModule,
    FloristModule,
    AuthModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([SnackBarEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 20, logOnly: environment.production, }),
    BrowserAnimationsModule,
  ],
  providers: [
    OidcConfigService,
    SnackBarService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent]
})
export class AppModule { }

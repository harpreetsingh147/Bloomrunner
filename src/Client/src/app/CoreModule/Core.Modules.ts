/* core Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* external modules */
import { MaterialModule } from '../MaterialModule/Material.module';
import { RouterModule } from '@angular/router';

/* components */
import { AppComponent } from '../app.component';
import { LoginComponent } from './Components/Login/Login.Component';
import { RegisterComponent } from './Components/Register/Register.Component';
import { ForgotPasswordComponent } from './Components/ForgotPassword/ForgotPassword.Component';
import { HeaderComponent } from './Components/Header/Header.Component';
import { FooterComponent } from './Components/Footer/Footer.Component';
import { WelcomeComponent } from './Components/Welcome/Welcome.Component';

/* services */
import { AuthService } from './Services/AuthService';
import { RegisterService } from './Services/RegisterService';

/* Ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './Store/Auth.Effect';
import { reducers } from './Store/Auth.State';
import { metaReducers } from './Store/Meta.Reducers';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        StoreModule.forFeature("authentication", reducers, { metaReducers }),
        EffectsModule.forFeature([AuthEffect]),
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent
    ],
    providers: [
        AuthService,
        RegisterService
    ],
    bootstrap: [AppComponent]
})

export class CoreModule { }
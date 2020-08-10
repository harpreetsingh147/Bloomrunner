import { Component } from '@angular/core';
import { AppInjector } from './app-injector.service';
import { UtilitiesService } from './UtilitiesService';
import { LoggingService } from './LoggingService';

export class BaseComponent {
    protected utilitiesService?: UtilitiesService;    
    protected loggingService?: LoggingService;
    constructor() {
        const injector = AppInjector.getInjector();       
            this.logNavigation();
    }
    protected logError(errorMessage: string) {}
    private logNavigation() {}
}
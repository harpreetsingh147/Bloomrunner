import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';
import { RegisterModel } from '../Models/RegisterModel/RegisterModel';
import { BaseService } from './base.service';

/**
 * ? implemented model-adapter pattern
 */
@Injectable()
export class RegisterService extends BaseService<RegisterModel> {
    constructor(private http: HttpClient) {
        super(http, environment.authUrl, "register");
    }
}
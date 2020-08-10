import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Base } from '../Models/Base.Model';


export class BaseService<T extends Base> {

    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    get(): Observable<T[]> {
        return this.httpClient
            .get<T[]>(`${this.url}/${this.endpoint}`)
            .pipe(
                retry(2)
            )
    }

    getById(id: number): Observable<T> {
        return this.httpClient
            .get<T>(`${this.url}/${this.endpoint}/${id}`)
            .pipe(
                retry(2)
            )
    }

    create(item: T): Observable<T> {
        debugger;
        return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2)
            )
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${this.url}/${this.endpoint}/${item.id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2)
            )
    }

    delete(item: number) {
        return this.httpClient.delete<T>(`${this.url}/${this.endpoint}/${item}`)
            .pipe(
                retry(2)
            )
    }
}
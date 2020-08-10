/* angular core modules */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
/* rxjs */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* models */
import { Florist } from '../Models/Florist';
import { FloristRequestModel } from '../Models/FloristRequestModel';
import { environment } from 'src/environments/environment';

@Injectable()
export class FloristService {
    constructor(private http: HttpClient) { }
    private APIUrl: string = `${environment.apiGateway}/florist`;
    public List(model: FloristRequestModel): Observable<any> {
        let params = new HttpParams()
            .set('SearchColumn', model.SearchColumn)
            .set('SearchValue', model.SearchValue)
            .set('PageNo', model.PageNo.toString())
            .set('PageSize', model.PageSize.toString());
        return this.http.get(`${this.APIUrl}/list`, { params: params });
    }
    public Add(model): Observable<any> {
        return this.http.post(`${this.APIUrl}/PostMe`, model.data);
    }
    public Update(courseId: string | number, changes: Partial<Florist>): Observable<any> {
        let url = `${this.APIUrl}/UpdateMe`;
        return this.http.put(url, changes["data"])
            .pipe(map(response => response as any));
    }
    public Delete(FloristId: number): Observable<any> {
        let url = `${this.APIUrl}/DeleteMe?StudentId=${FloristId}`;
        return this.http
            .delete(url).pipe(map(response => response as any));
    }

}
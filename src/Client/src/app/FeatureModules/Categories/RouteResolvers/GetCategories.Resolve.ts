import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class GetCategoriesRouteResolve implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    let newsUrl = 'https://httpbin.org/post';
    let news = 'The sky is blue';

    return this.http.post(newsUrl, news).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}
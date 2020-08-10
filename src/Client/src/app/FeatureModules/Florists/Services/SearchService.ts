/* angualr core modules */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* rxjs */
import {debounceTime,mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

/* services */
import { FloristService } from './Florist.service';

/* models */
import { FloristRequestModel } from '../Models/FloristRequestModel';

@Injectable()
export class SearchService {
  baseUrl: string = 'https://localhost:5001/Florist/';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient,private service: FloristService) {}

  public search(terms: Observable<FloristRequestModel>):Observable<any> {
    return terms.pipe(
        debounceTime(1000),
        mergeMap(search => this.searchEntries(search))
       );
  }
  private searchEntries(search):Observable<any> {
    return this.service.List(search);
  }
}
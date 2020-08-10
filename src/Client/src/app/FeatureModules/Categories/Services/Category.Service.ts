import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryListViewModel } from '../Models/Response/CategoriesListVM';

@Injectable()
export class CategoryServices {

    public getCategoryList():Observable<Array<CategoryListViewModel>>{
        var list =Array<CategoryListViewModel>();
        return of(list);
    }
    public addCategoryList(model:CategoryListViewModel):Observable<Boolean>{
        var list =Array<CategoryListViewModel>();
        return of(true);
    }

    public updateCategory():Observable<CategoryListViewModel>{
        return of(new CategoryListViewModel());
    }

    public deletedCategory():Observable<CategoryListViewModel>{
        return of(new CategoryListViewModel());
    }
}
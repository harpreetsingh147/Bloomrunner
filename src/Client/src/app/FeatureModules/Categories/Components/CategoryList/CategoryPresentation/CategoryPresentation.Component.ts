/* angular core modules */
import { Component, Input, Output, EventEmitter } from '@angular/core';

/* models and properties */
import { CategoryListViewModel } from '../../../Models/Response/CategoriesListVM';

@Component({
    selector:'app-category-table',
    templateUrl:'./CategoryPresentation.Component.html',
    styleUrls:['./CategoryPresentation.Component.scss']
})
export class CategoryPresentationComponent
{
    @Input() categoryList:Array<CategoryListViewModel>=new Array<CategoryListViewModel>()
    @Output() onDeleteCategory = new EventEmitter<any>();
    @Output() onUpdateCategory = new EventEmitter<any>();


    public deleteCategoryHandler():Boolean|void{
        this.onDeleteCategory.emit(10);
    }

    public updateCategoryHandler():Boolean|void{
        this.onUpdateCategory.emit(10);
    }
}
/* core modules */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* external modules */
import {SubSink} from 'subsink';

/* view and request properties */
import { CategoriesListRequestModel } from '../../Models/Request/CategoriesList.Model';
import { CategoryListViewModel } from '../../Models/Response/CategoriesListVM';

/* sercies */
import { CategoryServices } from '../../Services/Category.Service';

/* Rxjs */
import { Observable } from 'rxjs';


Component({
    selector:'app-add-category',
    templateUrl:'./AddCategory.Component.html',
    styleUrls:['./AddCategory.Component.scss']
})
export class CategoryListComponent implements OnInit,OnDestroy {

    /* local variables and properties */
    public categoryListRequest:CategoriesListRequestModel=new CategoriesListRequestModel();
    public categoryListViewModel:CategoryListViewModel=new CategoryListViewModel();
    public categoryList:Array<CategoryListViewModel>=new Array<CategoryListViewModel>();

    /* subscriptions */
    private subs = new SubSink();

    constructor(private categoryService$:CategoryServices,private route: ActivatedRoute){}

    ngOnInit(){
        this.categoryList=this.route.snapshot.data["categoryList"];
    }
    
    /*
        Method : Add new category
        @param  CategoryListViewModel
        @responee Array<CategoryListViewModel>
    */
    public addCategory():Observable<CategoryListViewModel>|void{
        this.subs.add(this.categoryService$.addCategoryList(this.categoryListViewModel).subscribe(response=>{
            //get response
        },(error)=>{
            //handle error
        }));
    }

    /*
    *     Update Category Method
    **    Only accept category name and description
    !     All validations should only accept alphabet characters
    TODO  Method is created but yet to implemented
    ?     This method reuse in multiple places in this component
    *     @param  model:CategoryListViewModel
    */
    public updateCategory($event):void{
        this.subs.add(this.categoryService$
        .updateCategory().subscribe(response=>{},(error)=>{
            //capture error here
        }));
    }


    /*
    *     Delete Category Method
    **    Only accept category name and description
    !     All validations should only accept alphabet characters
    TODO  Method is created but yet to implemented
    ?     This method reuse in multiple places in this component
    *     @param  model:CategoryListViewModel
    */
    public deleteCategory($event):void{
        this.subs.add(this.categoryService$
        .updateCategory().subscribe(response=>{},(error)=>{
            //capture error here
        }));
    }
    
    private prepareCategoryViewModel():Array<CategoryListViewModel>{
        return Array<CategoryListViewModel>();
    }

    ngOnDestroy(){
        this.subs.unsubscribe();
    }
}
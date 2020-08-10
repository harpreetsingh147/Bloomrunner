import { Pipe } from "@angular/core";
import { ReturnStatement } from '@angular/compiler';

@Pipe({
    name:"pipe-categoryType"
})
/*
  Format c# Date object to javascript date string
  @param Date
*/
export class CategorTypePipe {
    transform(type: number): string|null {
        if (!type) { return null;  }
        if(type===1) { return 'ProductCategory' }
        else if (type==2) {  return 'OrderCategory'  }
        else   return 'Default'
      }
 }
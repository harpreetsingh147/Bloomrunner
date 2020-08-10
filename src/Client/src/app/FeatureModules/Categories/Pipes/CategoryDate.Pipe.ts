import { Pipe } from "@angular/core";

@Pipe({
    name:"pipe-categoryDateFormat"
})
/*
  Format c# Date object to javascript date string
  @param Date
*/
export class CategoryDateFormatPipe {
    transform(creationDate: Date): string|null {
        if (!creationDate) {
            return null;
        }
        return creationDate.getDate().toString();
      }
 }
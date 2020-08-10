import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({ name: 'customizeClass' })
export class CustomizeClassPipe implements PipeTransform {
    transform(value: string): string {

        return `${value}th`;
    }
}
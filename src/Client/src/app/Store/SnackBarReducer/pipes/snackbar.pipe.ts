import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'notifaction' })
export class SnackbarNotificationPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1:
                return 'Success'
                break;
            case 1:
                return 'Error'
                break;
            case 1:
                return 'Warning'
                break;
            case 1:
                return 'Infomation'
                break;
        }
    }
}
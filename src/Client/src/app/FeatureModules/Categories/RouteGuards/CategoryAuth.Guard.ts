/* core modules */
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
/* rxjs */
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateCategory implements CanActivate {
  constructor(private permissions: Permissions) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ): Observable<boolean>|Promise<boolean|UrlTree>|boolean|UrlTree {
   // return this.permissions.canActivate({name:'user'}, route.params.id);
    return true;
  }
}
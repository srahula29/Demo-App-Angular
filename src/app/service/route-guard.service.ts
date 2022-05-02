import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isManagerLoggedIn()) {
      return true
    }

    else if (this.hardcodedAuthenticationService.isAdminLoggedIn()) {
      return true
    }

    else if (this.hardcodedAuthenticationService.isTeammemberLoggedIn()) {
      return true
    }

    return false
  }

}

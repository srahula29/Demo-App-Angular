import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username: any, password: any) {


    if (username === "Manager" && password === 'password') {
      sessionStorage.setItem('authenticatedManager', username);
      return true;
    }

   else if (username === "Admin" && password === 'admin') {
    sessionStorage.setItem('authenticatedAdmin', username);
    return true;
    }

    else if (username === "Team member" && password === 'team') {
      sessionStorage.setItem('authenticatedTeammember', username);
      return true;
    }

    return false;

  }


  isManagerLoggedIn() {

    let user = sessionStorage.getItem('authenticatedManager');

    return !(user == null);

  }


  isAdminLoggedIn() {

    let user = sessionStorage.getItem('authenticatedAdmin');

    return !(user == null);

  }

  isTeammemberLoggedIn() {

    let user = sessionStorage.getItem('authenticatedTeammember');

    return !(user == null);

  }


  logout() {
    sessionStorage.removeItem('authenticatedManager');
    sessionStorage.removeItem('authenticatedAdmin');
    sessionStorage.removeItem('authenticatedTeammember');
  }


}

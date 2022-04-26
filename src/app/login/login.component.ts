import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  //Dependency Injection
  constructor(private router: Router,
    private hardcoadedauthenticationservice: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit(): void {
  }


  handleLogin() {

    if (this.hardcoadedauthenticationservice.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }

  }


  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)

        this.router.navigate(['welcome', this.username])

        this.invalidLogin = false
      },
      error => {

        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}

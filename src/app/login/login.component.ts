import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username= 'rahul'
  password= ''
  errorMessage='Invalid Credentials'
  invalidLogin= false


  //Dependency Injection
  constructor(private router : Router ,
    private hardcoadedauthenticationservice: HardcodedAuthenticationService) { 

  }

  ngOnInit(): void {
  }


  handleLogin(){

    //console.log(this.username);
    //console.log(this.password);
  //if (this.username==="rahul" && this.password==='123'){

    if (this.hardcoadedauthenticationservice.authenticate(this.username,this.password)){
    //Redirect to Welcome Page
    this.router.navigate(['welcome' , this.username])

  this.invalidLogin=false
   } else {  
  this.invalidLogin=true
 }

  }

}

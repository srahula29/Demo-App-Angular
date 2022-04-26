import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'welcome/:name' , component: WelcomeComponent },
  {path: 'employees', component: ListOfEmployeesComponent },
  {path: 'logout' , component: LogoutComponent },
  {path: 'employees/:id' , component: EmployeeComponent },
  {path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/list-of-employees/list-of-employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http: HttpClient
  ) { }



  retrieveAllEmployees(username: any) {

    return this.http.get<Employee[]>(`http://localhost:8080/users/${username}/employees`);

    //console.log("Execute Hello World Bean Service");

  }


  deleteEmployee(username: any, employeeId: any) {

    return this.http.delete(`http://localhost:8080/users/${username}/employees/${employeeId}`);

  }

  retrieveEmployee(username: any, employeeId: any) {

    return this.http.get<Employee>(`http://localhost:8080/users/${username}/employees/${employeeId}`);

  }


  updateEmployee(username: any, employeeId: any, employee: any) {

    return this.http.put(`http://localhost:8080/users/${username}/employees/${employeeId}`, employee);

  }

  createEmployee(username: any, employee: any) {

    return this.http.post(`http://localhost:8080/users/${username}/employees`, employee);

  }

}

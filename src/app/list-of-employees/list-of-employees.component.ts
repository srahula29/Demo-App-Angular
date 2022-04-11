import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../service/data/employee-data.service';

export class Employee {

  constructor(
    public employeeId: number,
    public employeeName: string,
    public joiningDate: Date,
    public technology: string,
    public designation: string,

  ) {

  }

}

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.css']
})
export class ListOfEmployeesComponent implements OnInit {


  employees!: Employee[];

  message!: String;


  constructor(
    private employeeService: EmployeeDataService,
    private router: Router

  ) { }

  ngOnInit() {

    this.refreshEmployee();

  }


  refreshEmployee() {
    this.employeeService.retrieveAllEmployees('rahul').subscribe(

      response => {

        console.log(response);

        this.employees = response;
      }
    )

  }



  deleteEmployee(employeeId: any) {

    console.log(`delete employee ${employeeId}`);

    this.employeeService.deleteEmployee('rahul', employeeId).subscribe(

      response => {
        console.log(response);

        this.message = `Delete of EmployeeId ${employeeId} Successful!`

        this.refreshEmployee();
      }
    )
  }


  updateEmployee(employeeId: any) {

    console.log(`update ${employeeId}`);

    this.router.navigate(['employees', employeeId])

  }


  addEmployee(){

    this.router.navigate(['employees', -1])
  }

}

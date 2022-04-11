import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../list-of-employees/list-of-employees.component';
import { LoginComponent } from '../login/login.component';
import { EmployeeDataService } from '../service/data/employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeeId!: number

  employee!: Employee

  constructor(
    private employeeService: EmployeeDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    this.employeeId = this.route.snapshot.params['id'];

    this.employee = new Employee(this.employeeId, '', new Date(), '', '');

    if (this.employeeId != -1) {

      this.employeeService.retrieveEmployee('rahul', this.employeeId).subscribe(

        data => this.employee = data

      )

    }
  }


  saveEmployee() {

    if (this.employeeId === -1) {
      this.employeeService.createEmployee('rahul', this.employee).subscribe(

        data => {
          console.log(data)

          this.router.navigate(['employees'])
        }
      )

    } else {
      this.employeeService.updateEmployee('rahul', this.employeeId, this.employee).subscribe(

        data => {
          console.log(data)

          this.router.navigate(['employees'])
        }
      )
    }
  }

}

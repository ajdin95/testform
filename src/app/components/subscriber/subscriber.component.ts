
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service'; 

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  Employee:any = [];

  constructor(private apiService: ApiService) { 
    this.readEmployee();
  }

  ngOnInit() {
  }
  readEmployee(){
    this.apiService.getsubscribers().subscribe((data) => {
     this.Employee = data; 
    })    
  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }



}



 
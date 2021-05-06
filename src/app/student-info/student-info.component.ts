import { Component, OnInit } from '@angular/core';
import {Student} from "../model/Student";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  public student:Student = new Student(2,"Hong", 50);

  public isDisable:boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.student.point < 100){
      this.isDisable = false;
    }
  }

  updatePoint(value: string) {
    this.student.point = parseInt(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public students:any =[]

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentservice.getStudent();
  }

}

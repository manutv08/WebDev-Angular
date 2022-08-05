import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent(){
    return [
      { name:'John', age:25, phone:2344567 },
      { name:'Rajesh', age:30, phone:56123 },
      { name:'Rahman', age:25, phone:12345 }
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public title:string = 'My App';
  public studentname:string = "Manu"
  public myId:string ="mynewId"

  public image:string="https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g="

  classToApply:string = 'bold-class italic-class'

  applyBoldClass:boolean = false;

  hasError:boolean = false;

  fruit:boolean = true

  onClick(){
    this.fruit = !this.fruit
    if(this.fruit){
      this.image = "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g="
    }
    else{
      this.image = "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
  }


  public titleStyles = {
    color:"violet",
    fontStyle:"italic"

  }

  public getName():string{
    return this.studentname
  }

  public obj = {
    name:"Ramesh",
    age:20
  }
  numarray=[1,2,3]


  constructor() { }

  ngOnInit(): void {
  }

}

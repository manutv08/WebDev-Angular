import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public displayname:boolean = true;

  public personName = "Anuragj"

  public students = ["Raju", "John", "Suresh", "Salini"]
  public selected = "----"
  persons:any[]=[
    {
      name:"John",
      age:30,
      gender:"male"
    },
    {
      name:"Ram",
      age:35,
      gender:"male"
    },
    {
      name:"Rani",
      age:25,
      gender:"female"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(e:any){
    this.selected = e.target.value

  }

}

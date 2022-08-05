import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public parentData:string=''
childData:string=""
  constructor() { }

  ngOnInit(): void {
  }

  updateChild(e:any){
    this.childData=e;
  }

}

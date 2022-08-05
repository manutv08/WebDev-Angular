import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentValue:string = ''
  @Output() childToParent:EventEmitter<string> = new EventEmitter()
  childTextValue:string=""
  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.childToParent.emit(this.childTextValue)

  }

}

import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-outer-container',
  templateUrl: './outer-container.component.html',
  styleUrls: ['./outer-container.component.css']
})
export class OuterContainerComponent implements OnInit {
@Input() names;
name:string ="";
@Output() eventFromOuter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
eventFromInner(passed:string){
this.name = passed;
this.eventFromOuter.emit(this.name);
}
}

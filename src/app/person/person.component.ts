import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  @Output() deletePerson: EventEmitter<any> = new EventEmitter();

  constructor() {}

  delete(id: number) {
    this.deletePerson.emit(id);
  }

  ngOnInit(): void {}
}

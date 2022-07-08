import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() people: any;

  constructor(person: Person) {}

  ngOnInit(): void {}
}

import { JsonObjectComponent } from './json-object/json-object.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'code-challenge-1';

  people: Person[] = [];

  constructor(json: JsonObjectComponent) {
    this.people = json.data;
  }

  ngOnInit(): void {}

  deletePerson(id: number) {
    const temp = [...this.people].filter((person) => person.id !== id);
    this.people = temp;
  }
}

export class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

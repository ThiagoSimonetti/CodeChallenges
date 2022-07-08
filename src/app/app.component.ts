import { JsonObjectComponent } from './json-object/json-object.component';
import { Component, Output } from '@angular/core';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'code-challenge-1';

  @Output() people: Person[] = [];

  constructor(json: JsonObjectComponent) {
    this.people = json.data;
  }
}

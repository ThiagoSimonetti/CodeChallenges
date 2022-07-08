import { Component, Injectable, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-json-object',
  templateUrl: './json-object.component.html',
  styleUrls: ['./json-object.component.css'],
})
@Injectable()
export class JsonObjectComponent implements OnInit {
  arrayJson: Person[] = [
    new Person(1, 'James', 'Simonetti'),
    new Person(2, 'Chloe', 'Simonetti'),
    new Person(3, 'Andrea', 'Simonetti'),
    // {
    //   id: 1,
    //   firstName: 'James',
    //   lastName: 'Simonetti',
    // },
    // {
    //   id: 2,
    //   firstName: 'Chloe',
    //   lastName: 'Simonetti',
    // },
    // {
    //   id: 3,
    //   firstName: 'Andrea',
    //   lastName: 'Simonetti',
    // },
  ];

  constructor() {}

  get data(): Person[] {
    return this.arrayJson;
  }

  ngOnInit(): void {}
}

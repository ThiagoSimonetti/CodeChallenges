import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/person.model';

@Component({
  selector: 'app-json-object',
  templateUrl: './json-object.component.html',
  styleUrls: ['./json-object.component.css'],
})
export class JsonObjectComponent implements OnInit {
  arrayJson: Person[] = [
    {
      id: 1,
      firstName: 'James',
      lastName: 'Simonetti',
    },
    {
      id: 2,
      firstName: 'Chloe',
      lastName: 'Simonetti',
    },
    {
      id: 3,
      firstName: 'Andrea',
      lastName: 'Simonetti',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

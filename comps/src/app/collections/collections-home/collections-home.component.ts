import { Component, OnInit } from '@angular/core';
import { Data } from '../table/table.component';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'james', age: 34, job: 'Designer' },
    { name: 'Jill', age: 44, job: 'Engineer' },
    { name: 'Jonas', age: 20, job: 'Dev' },
    { name: 'Guilherme', age: 21, job: 'Chef' },
  ];

  headers = [
    { key: 'name' as keyof Data, label: 'Name' },
    { key: 'age' as keyof Data, label: 'Age' },
    { key: 'job' as keyof Data, label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

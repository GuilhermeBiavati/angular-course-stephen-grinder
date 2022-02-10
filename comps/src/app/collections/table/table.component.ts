import { Component, Input, OnInit } from '@angular/core';

export interface Data {
  name: string;
  age: number;
  job: string;
}

export interface Headers {
  key: keyof Data; label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() classNames = '';
  @Input() data: Data[] = [];
  @Input() headers: Headers[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

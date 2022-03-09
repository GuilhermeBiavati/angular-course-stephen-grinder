import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: number = 5;
  @Output() pageChanged = new EventEmitter();
  currentPage: number = 1;
  pageOptions: number[] = [1, 2, 3]

  constructor() {

  }


  ngOnInit(): void {
  }

}

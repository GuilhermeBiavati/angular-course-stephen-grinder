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
  pageOptions: number[] = [];

  constructor() {
    for (let index = 0; index < this.numberOfPages; index++) {
      this.pageOptions.push(index + 1);

    }
  }


  ngOnInit(): void {
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.pageChanged.emit(pageNumber);
  }

}

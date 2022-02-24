import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-email',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderEmailComponent implements OnInit {

  @Input() header: boolean = true;
  @Input() lines: number = 3;



  constructor() { }

  ngOnInit(): void {
  }

}

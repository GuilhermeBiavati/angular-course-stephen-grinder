import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: "# of users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "Satsfaction" },
  ];

  items = [{
    image: '/assets/images/couch.jpeg', title: 'Counch', description: 'This is a fantastic counch to sit on'
  }, {
    image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is a fantastic dresser to put stuff on'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

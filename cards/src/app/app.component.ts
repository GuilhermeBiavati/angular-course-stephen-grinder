import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: ' I saw this neat tree today'
    },
    {
      title: 'Snowy Montain',
      username: 'montain lover',
      imageUrl: 'assets/mountain.jpeg',
      content: ' I saw this neat tree today'
    },
    {
      title: 'Montain Hinking',
      username: 'biking123',
      imageUrl: 'assets/biking.jpeg',
      content: ' I did some biking today'
    }
  ]
}

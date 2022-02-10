import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  heigth: string = '';
  miles: string = '0';

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChenge(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = (event.target as HTMLInputElement).value;
  }

  onHeigthChange(event: Event) {
    this.heigth = (event.target as HTMLInputElement).value;
  }

  onMilesChange(event: Event) {
    this.miles = (event.target as HTMLInputElement).value;
  }
}

import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecastData: { dateString: string; temp: number; }[] = [];

  constructor(private forecastService: ForecastService) {
    forecastService.getForecast().subscribe((forecastData) => {
      this.forecastData = forecastData;
    });
  }

  ngOnInit(): void {
  }

}

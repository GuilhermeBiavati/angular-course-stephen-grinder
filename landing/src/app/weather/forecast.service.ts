import { NotificationsService } from './../notifications/notifications.service';
import { Injectable } from '@angular/core';
import { catchError, filter, map, mergeMap, Observable, of, pluck, retry, share, switchMap, tap, throwError, toArray } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

interface OpenWheaterResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', coords.latitude.toString())
          .set('lon', coords.longitude.toString())
          .set('units', 'metric')
          .set('appid', '2f9029d3e1f4b14cfa43cf9e948a8dcb')
      }),
      switchMap((params) => {
        return this.http.get<OpenWheaterResponse>(this.url, { params });
      }),
      pluck('list'),
      mergeMap(list => of(...list)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        }
      }),
      toArray(),
      share()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    }).pipe(
      retry(1),
      tap(() => this.notificationsService.addSuccess('Got your location')),
      catchError((err) => {
        this.notificationsService.addError('Failed to get your location');
        return throwError(() => new Error(err));
      }),
    );
  }
}

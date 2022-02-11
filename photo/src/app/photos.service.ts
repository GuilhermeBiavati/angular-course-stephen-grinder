import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

export interface PhotoResponce {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PhotoResponce>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID HtJT4b3feH3v8XEknERt9ebSKyNznSLKBc-eqI1aNeQ',
        'Accept-Version': 'v1'
      }
    }).pipe(pluck('urls', 'regular'));
  }

}

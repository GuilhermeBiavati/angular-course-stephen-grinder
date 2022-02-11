import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  imgUrl: string = '';

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.photosService.getPhoto().subscribe((photo) => {
      this.imgUrl = photo;
    });
  }

}

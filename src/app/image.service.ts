import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  images: string[] = [
    '../../assets/images/offer1.jpg',
    '../../assets/images/offer2.jpg',
    '../../assets/images/offer3.jpg',
    '../../assets/images/offer4.jpg',
  ];
  constructor() {}

  getImages() {
    return this.images;
  }
}

import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageUrls!: string[];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageUrls = this.imageService.getImages();
    console.log(this.imageUrls);
  }
}

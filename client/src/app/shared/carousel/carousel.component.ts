import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/types/carouselImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() indicators: boolean = true;

  selectedIndex: number = 0;

  ngOnInit(): void {

  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}

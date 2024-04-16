import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, CarouselComponent],
})
export class SharedModule { }

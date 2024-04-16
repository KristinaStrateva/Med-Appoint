import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
    HomePageComponent,
  ],
})
export class MainModule { }

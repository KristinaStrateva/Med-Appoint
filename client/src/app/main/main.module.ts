import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { MainRoutingModule } from './main-routing.module';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    FeaturesComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    HomePageComponent,
  ],
})
export class MainModule { }

import { Injectable } from '@angular/core';
import { CarouselImage } from './shared/interfaces/ICarousel';
import { HttpClient } from '@angular/common/http';
import { DOCTORS_URL } from './shared/constants/urls';
import { Observable } from 'rxjs';
import { IDoctorsData } from './shared/interfaces/IDoctorsData';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<IDoctorsData> {
    return this.http.get<IDoctorsData>(DOCTORS_URL);
  }
}

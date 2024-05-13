import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoading() {
    this.isLoading$$.next(true);
  }

  hideLoading() {
    this.isLoading$$.next(false);
  }

  get isLoading() {
    return this.isLoading$$.asObservable();
  }
}

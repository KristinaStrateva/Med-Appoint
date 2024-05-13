import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading!: boolean;

  constructor(loadingService: SpinnerService) {
    loadingService.isLoading.subscribe((bool) => {
      this.isLoading = bool;
    });
  }
}

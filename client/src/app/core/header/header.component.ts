import { Component } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';
import { PatientService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  patient!: Patient;

  constructor(private patientService: PatientService) {
    patientService.patient$.subscribe(currPatient => {
      this.patient = currPatient;
    })
  }

  logoutHandler(): void {
    this.patientService.logout();
  }

  get isAuth() {
    return this.patient.token;
  }
}

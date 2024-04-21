import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Patient } from '../shared/models/Patient';
import { IPatientLogin } from '../shared/interfaces/IPatientLogin';
import { HttpClient } from '@angular/common/http';
import { PATIENT_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patient$$ = new BehaviorSubject<Patient>(new Patient());
  public patient$: Observable<Patient>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.patient$ = this.patient$$.asObservable();
  }

  login(patientLogin: IPatientLogin): Observable<Patient> {
    return this.http.post<Patient>(PATIENT_LOGIN_URL, patientLogin).pipe(
      tap({
        next: (patient) => {
          this.patient$$.next(patient);
          this.toastrService.success(
            `Welcome to Christea CLinics App, ${patient.firstName} ${patient.lastName}!`,
            'Sign In Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Sign In Failed');
        }
      }
    ));
  }

  register() {

  }

  logout() {
    
  }
}

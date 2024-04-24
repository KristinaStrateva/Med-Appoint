import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Patient } from '../shared/models/Patient';
import { IPatientLogin } from '../shared/interfaces/IPatientLogin';
import { IPatientRegister } from '../shared/interfaces/IPatientRegister';

import { PATIENT_LOGIN_URL, PATIENT_REGISTER_URL } from '../shared/constants/urls';

const PATIENT_KEY = 'auth';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patient$$ = new BehaviorSubject<Patient>(this.getPatientFromLocalStorage());
  public patient$: Observable<Patient>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.patient$ = this.patient$$.asObservable();
  }

  login(patientLogin: IPatientLogin): Observable<Patient> {
    return this.http.post<Patient>(PATIENT_LOGIN_URL, patientLogin).pipe(
      tap({
        next: (patient) => {
          this.setPatientToLocaleStorage(patient);
          this.patient$$.next(patient);
          this.toastrService.success(
            `Welcome to Christea Clinics, ${patient.firstName.toUpperCase()} ${patient.lastName.toUpperCase()}!`,
            'Sign In Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error.message, 'Sign In Failed');
        }
      }
      ));
  }

  register(patientRegister: IPatientRegister): Observable<Patient> {
    return this.http.post<Patient>(PATIENT_REGISTER_URL, patientRegister).pipe(
      tap({
        next: () => {
          this.login({ email: patientRegister.email, password: patientRegister.password });
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error.message, 'Sign Up Failed');
        }
      }
      ));
  }

  logout() {

  }

  private setPatientToLocaleStorage(patient: Patient) {
    localStorage.setItem(PATIENT_KEY, JSON.stringify(patient));
  }

  private getPatientFromLocalStorage(): Patient {
    const patientJSON = localStorage.getItem(PATIENT_KEY);

    if (patientJSON) {
      return JSON.parse(patientJSON) as Patient;
    } else {
      return new Patient();
    }
  }
}

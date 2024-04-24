import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Patient } from '../shared/models/Patient';
import { IPatientLogin } from '../shared/interfaces/IPatientLogin';
import { HttpClient } from '@angular/common/http';
import { PATIENT_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
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
          this.toastrService.error(errorResponse.error, 'Sign In Failed');
        }
      }
      ));
  }

  register() {

  }

  logout() {
    

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

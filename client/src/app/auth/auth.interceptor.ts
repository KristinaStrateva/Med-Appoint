import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientService } from '../user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: PatientService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const patient = this.userService.currentUser;

    if (patient.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${patient.token}`
        }
      })
    }

    return next.handle(request);
  }
}

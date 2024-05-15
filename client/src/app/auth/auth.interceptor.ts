import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { PatientService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: PatientService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const patient = this.userService.currentUser;

    if (patient.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${patient.token}`
        }
      })
    }

    return next.handle(request).pipe(
      catchError((errorResponse) => {
        if (request.url === '/appointments' && errorResponse.status === 401) {
          this.router.navigateByUrl('/auth/login');
        }

        return [errorResponse];
      })
    );
  }
}

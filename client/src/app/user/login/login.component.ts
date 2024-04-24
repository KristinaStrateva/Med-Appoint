import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PatientService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginActive: boolean = true;
  returnUrl = '';

  loginForm = this.formBuilder.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required]],
  });


  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  toggleForm(): void {
    this.isLoginActive = !this.isLoginActive;

    if (this.isLoginActive) {
      this.loginForm.enable();


    } else {
    }

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  loginSubmitHandler() {
    if (this.isLoginActive && this.loginForm && !this.loginForm.invalid) {

      this.patientService.login(
        {
          email: this.loginFormControls.loginEmail.value!,
          password: this.loginFormControls.loginPassword.value!,
        }
      ).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
    } else {
      this.toastrService.error('Sign In form is not valid!');
      return;
    }

    this.loginForm.reset();
  }

  registerSubmitHandler() {
  }
}

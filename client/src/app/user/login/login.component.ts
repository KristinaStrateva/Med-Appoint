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

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    registerEmail: ['', [Validators.required, Validators.email]],
    registerPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/[A-Za-z0-9!._]+/)]],
    rePassword: ['', [Validators.required]],
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

      this.registerForm.disable();

    } else {
      this.registerForm.enable();

      this.loginForm.disable();
    }
  }

  ngOnInit(): void {
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
    if (!this.isLoginActive && this.registerForm && !this.registerForm.invalid) {
      const firstName: string = this.registerFormControls.firstName.value!;
      const lastName: string = this.registerFormControls.lastName.value!;
      const email: string = this.registerFormControls.registerEmail.value!;
      const password: string = this.registerFormControls.registerPassword.value!;
      const rePassword: string = this.registerFormControls.rePassword.value!;

      if (password !== rePassword) {
        this.toastrService.error('Passwords don\'t match!');

        this.registerFormControls.registerPassword.reset();
        this.registerFormControls.rePassword.reset();

        return;
      }

      this.patientService.register({
        firstName,
        lastName,
        email,
        password,
        rePassword
      }).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });

    } else {
      this.toastrService.error('Sign Up form is not valid!');
      return;
    }

    this.registerForm.reset();
  }
}

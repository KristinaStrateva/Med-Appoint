import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginActive: boolean = true;
  returnUrl = '';

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  toggleForm(): void {
    this.isLoginActive = !this.isLoginActive;
  }

  ngOnInit(): void {
    if (this.isLoginActive) {
      this.loginForm = this.formBuilder.group({
        loginEmail: ['', [Validators.required, Validators.email]],
        loginPassword: ['', [Validators.required]],
      });

    } else {
      this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
        registerEmail: ['', [Validators.required, Validators.email]],
        registerPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/[A-Za-z0-9!._]+/)]],
        rePassword: ['', [Validators.required]],
      })
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
    if (this.isLoginActive) {

      this.patientService.login(
        {
          email: this.loginFormControls['loginEmail'].value,
          password: this.loginFormControls['loginPassword'].value
        }
      ).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
    }
  }

  registerSubmitHandler() {
    const { firstName, lastName, registerEmail, registerPassword, rePassword } = this.registerForm.value;
    console.log(firstName, lastName, registerEmail, registerPassword, rePassword);
  }
}

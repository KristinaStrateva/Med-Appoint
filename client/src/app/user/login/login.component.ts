import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isActive: boolean = false;

  constructor() {}

  toggleForm(): void {
    this.isActive = !this.isActive;

  get registerFormControls() {
    return this.registerForm.controls;
  }
  registerSubmitHandler() {
    const { firstName, lastName, registerEmail, registerPassword, rePassword } = this.registerForm.value;
    console.log(firstName, lastName, registerEmail, registerPassword, rePassword);
  }
}

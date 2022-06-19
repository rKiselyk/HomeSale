import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;

  get name(): FormControl {
    return this.registrationForm.get('name') as FormControl
  }
  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl
  }
  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl
  }
  get confirmPassword(): FormControl {
    return this.registrationForm.get('confirmPassword') as FormControl
  }
  get mobile(): FormControl {
    return this.registrationForm.get('mobile') as FormControl
  }

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl('Mark', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, <ValidatorFn>this.passwordMatchingValidators)
  }

  passwordMatchingValidators(fg: FormGroup): Validators {
    return fg.get("password").value === fg.get("confirmPassword").value
      ? null
      : { notmatched: true };
  }

  submit() {
    console.log(this.registrationForm);

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean = false;

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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   name: new FormControl('Mark', Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, <ValidatorFn>this.passwordMatchingValidators)

    this.createRegistrationForm();
  }

  passwordMatchingValidators(fg: FormGroup): Validators {
    return fg.get("password").value === fg.get("confirmPassword").value
      ? null
      : { notmatched: true };
  }

  submit() {
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      this.userService.addUsers(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;

      this.alertifyService.success("congrats, you are successful register")
    } else {
      this.alertifyService.error("kindly provide the required fields")
    }
  }

  private createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['Mark', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }
    //, { validators: this.passwordMatchingValidators}
    )
  }

  private userData(): User {
    return this.user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}

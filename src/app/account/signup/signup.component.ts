import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload, ConfirmPassword } from '../authservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../phone.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  passwordNotMatch: boolean;
  noEmail: boolean;
  isInvalidForm: boolean;
  busy: boolean;
  emailExist: boolean;
  signupForm: FormGroup;
  passLess: boolean;

  credentials: TokenPayload = {
    id: 0,
    name: '',
    phone_number: null,
    email: '',
    password: '',
  };

  credConfirm: ConfirmPassword = {
    confirmPassword: ''
  };

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', Validators.email),
      name: new FormControl(''),
      phone_number: new FormControl('', [Validators.required, phoneNumberValidator]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }


  constructor(private authService: AuthService,
              private router: Router) {
                this.signupForm = this.createFormGroup();
               }


  reset() {
    this.signupForm.reset();

  }

  register() {
    this.passwordNotMatch = false;
    this.isInvalidForm = false;
    this.passLess = false;
    this.busy = true;

    if (this.credentials.email === ''
    || this.credentials.phone_number === null
    || this.credentials.name === ''
    || this.credentials.password === '' ) {
      this.isInvalidForm = true;
      this.busy = false;
    } else {
        if (this.credentials.password.length < 8) {
          this.passLess = true;
          this.busy = false;
          return;
        }
        if (this.credentials.password !== this.credConfirm.confirmPassword ) {
          this.passwordNotMatch = true;
          this.busy = false;
        } else {
            this.authService.register(this.credentials).subscribe(
              () => {
                this.router.navigateByUrl('/account/profile');
                this.busy = false;
              },
              err => {
                console.log(err);
                if (err['error'] === `{"email":["The email has already been taken."]}`) {
                  this.emailExist = true;
                  this.busy = false;
                }
              }
            );
        }
    }
  }

  ngOnInit() {
  }

}

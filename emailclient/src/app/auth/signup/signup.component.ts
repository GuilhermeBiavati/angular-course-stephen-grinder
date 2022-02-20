import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MathPassword } from '../validators/math-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ], [
        this.uniqueUsername.validate
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    },
    { validators: [this.matchPassword.validate] }
  );


  username = this.authForm.controls['username'] as FormControl;
  password = this.authForm.controls['password'] as FormControl;
  passwordConfirmation = this.authForm.controls['passwordConfirmation'] as FormControl;

  constructor(
    private matchPassword: MathPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    // const { } = this.authForm.value;

    this.authService.signup(this.authForm.value).subscribe(
      {
        next: (reponse) => {
          this.router.navigateByUrl('/inbox');
        },
        error: (err) => {
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
          } else {
            this.authForm.setErrors({ unknownError: true });
          }
        }
      }
    );


  }
}

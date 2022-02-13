import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.minLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  name = this.cardForm.controls['name'] as FormControl;
  cardNumber = this.cardForm.controls['cardNumber'] as FormControl;
  expiration = this.cardForm.controls['expiration'] as FormControl;
  securityCode = this.cardForm.controls['securityCode'] as FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onResetClick() {
    this.cardForm.reset();
  }

}

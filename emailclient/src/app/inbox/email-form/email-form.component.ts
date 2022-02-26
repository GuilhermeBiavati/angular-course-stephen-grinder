import { FormGroup, FormControl } from '@angular/forms';
import { Email } from './../email';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() email: Email = {
    id: '',
    subject: '',
    text: '',
    to: '',
    from: '',
    html: ''
  };

  @Output() emailSubmit = new EventEmitter();

  emailForm: FormGroup = new FormGroup({});
  toControl: FormControl = new FormControl();
  subjectControl: FormControl = new FormControl();
  fromControl: FormControl = new FormControl();
  textControl: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.email, 'aqui2');

    const { subject, from, to, text } = this.email;

    this.toControl = new FormControl(to);
    this.subjectControl = new FormControl(subject);
    this.fromControl = new FormControl({ value: from, disabled: true });
    this.textControl = new FormControl(text);

    this.emailForm = new FormGroup({
      to: this.toControl,
      subject: this.subjectControl,
      from: this.fromControl,
      text: this.textControl,
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.emailSubmit.emit(this.emailForm.value);
  }

}

import { FormGroup, FormControl } from '@angular/forms';
import { Email } from './../email';
import { Component, Input, OnInit } from '@angular/core';

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

  emailForm: FormGroup;
  toControl: FormControl;
  subjectControl: FormControl;
  fromControl: FormControl;
  textControl: FormControl;

  constructor() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to),
      subject: new FormControl(subject),
      from: new FormControl(from),
      text: new FormControl(text),
    });

    this.toControl = this.emailForm.controls['to'] as FormControl;
    this.subjectControl = this.emailForm.controls['to'] as FormControl;
    this.fromControl = this.emailForm.controls['to'] as FormControl;
    this.textControl = this.emailForm.controls['to'] as FormControl;
  }

  ngOnInit(): void {

  }

}

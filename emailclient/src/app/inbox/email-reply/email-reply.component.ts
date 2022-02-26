import { EmailService } from './../email.service';
import { Email } from './../email';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent {

  @Input() email: Email = {
    id: '',
    subject: '',
    text: '',
    to: '',
    from: '',
    html: ''
  }

  showModal = false;

  constructor(private emailService: EmailService) { }

  ngOnChanges(): void {

    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------------------: ${this.email.from} wrote? \n> ${text}`,
    }
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }

}

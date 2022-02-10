import { Component, ElementRef, ViewChild } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = faker.lorem.sentence();

  correctMessage = '';
  wrongMessage = '';
  unInputedMessage = this.message;
  inputedMessage = '';
  success = false;

  onChangeInput(event: Event) {
    this.inputedMessage = (event.target as HTMLInputElement).value;
    console.log(this.inputedMessage);
    let inputedMessageLenght = this.inputedMessage.length;

    if (inputedMessageLenght <= this.message.length) {

      this.correctMessage = '';
      this.wrongMessage = '';
      this.unInputedMessage = this.message;

      for (let i = 0; i < inputedMessageLenght; i++) {
        if (this.inputedMessage[i] == this.message[i] && this.wrongMessage == '') {
          this.correctMessage += this.message[i]
        } else {
          this.wrongMessage += this.message[i]
        }
      }

      this.unInputedMessage = this.message.substring(inputedMessageLenght, this.message.length);

      if (this.inputedMessage == this.message) {
        this.success = true
      }
    }
  }

  onClick() {
    this.message = faker.lorem.sentence();
    this.correctMessage = '';
    this.wrongMessage = '';
    this.unInputedMessage = this.message;
    this.inputedMessage = this.message;
    this.success = false;
  }
}

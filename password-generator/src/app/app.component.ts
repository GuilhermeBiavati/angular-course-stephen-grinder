import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  length = 0;

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwyz";
    const lettersCapsLock = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters
      validChars += lettersCapsLock
    }

    if (this.includeNumbers) {
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    let genaratedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      genaratedPassword += validChars[index];
    }

    this.password = genaratedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers

  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(event: Event) {

    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0
    }

  }
}

import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedin = false;

  constructor(private authService: AuthService) {


  }

  ngOnInit() {
    this.authService.signedin$.subscribe((signedin) => {
      this.signedin = signedin;
    });

    this.authService.checkAuth
  }

}

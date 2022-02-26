import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedin: boolean | null = false;

  constructor(private authService: AuthService, private router: Router) {

    console.log('constructor');
  }

  ngOnInit() {
    this.authService.signedin$.subscribe((signedin) => {
      this.signedin = signedin;
      this.router.navigateByUrl('/inbox');
    });
    this.authService.checkAuth().subscribe(() => {
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}


interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = 'https://api.angular-email.com'

  signedin$ = new BehaviorSubject<boolean | null>(null);

  constructor(private http: HttpClient) { }

  usernameAvaiable(username: string) {
    return this.http.post<{ available: boolean }>(this.url + '/auth/username', {
      username: username
    });
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.url + '/auth/signup', credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(this.url + '/auth/signedin')
      .pipe(
        tap(({ authenticated }) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(this.url + '/auth/signout', {})
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      );
  }

  signin(creadentials: SigninCredentials) {
    return this.http.post(this.url + '/auth/signin', creadentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

}

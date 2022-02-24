import { EmailService } from './email.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, EMPTY } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<Email> {

  constructor(private emailService: EmailService, private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Email> {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }


}

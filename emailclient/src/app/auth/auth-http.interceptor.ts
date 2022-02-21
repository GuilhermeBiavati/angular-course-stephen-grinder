import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Modify or log the outgoing request
    const modifiedRequest = request.clone({
      withCredentials: true,
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });

    return next.handle(modifiedRequest);
  }
}

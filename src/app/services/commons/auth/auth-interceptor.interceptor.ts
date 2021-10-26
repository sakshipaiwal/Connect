import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private refreshEndPoint = "localhost/users/refreshToken";

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);  
  constructor(private http : HttpClient) {}

    handle401Error(request: HttpRequest<unknown>, next: HttpHandler){
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);
    
        // change this to auth service
        return this.http.post(this.refreshEndPoint,{}).pipe(
          switchMap((data: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            return next.handle(this.addToken(request, data.accessToken));
          }));
    
      } else {
        return this.refreshTokenSubject.pipe(
          filter(token => token != null),
          take(1),
          switchMap(jwt => {
            return next.handle(this.addToken(request, jwt));
          }));
      }
   
  }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.toLowerCase().includes("signup") || request.url.toLowerCase().includes("login"))
      return next.handle(request);

    let accessToken = localStorage.getItem("accessToken");
    if(accessToken){
      request = this.addToken(request,accessToken);
    }
    
    return next.handle(request).pipe(
      catchError((error) => {
          
        if(error instanceof HttpErrorResponse && error.status === 401){
          return this.handle401Error(request,next);
        }
          return throwError(error.message);
        }
      )
    )
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}



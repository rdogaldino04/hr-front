import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { Router } from '@angular/router';
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        console.log('AuthInterceptor handleAuthError')
        if (err.status === 401 || err.status === 403) {
            this.router.navigateByUrl(`/home`);            
            return of(err.message);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(x => this.handleAuthError(x)))
    }

}
// https://stackoverflow.com/questions/46017245/how-to-handle-unauthorized-requestsstatus-with-401-or-403-with-new-httpclient

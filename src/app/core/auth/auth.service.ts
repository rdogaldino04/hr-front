import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    
    constructor(
        private http: HttpClient
    ) {
        console.log('AuthService')
    }

    authenticate(userName: string, password: string): Observable<any> {
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', password);
        return this.http
            .post(`${API_URL}/login?username=${userName}&password=${password}`,
                null
            ).pipe(tap(res => {
                const authToken = res.refresh_token;
                console.log(authToken)
                console.log(res)
            }));
    }

  }
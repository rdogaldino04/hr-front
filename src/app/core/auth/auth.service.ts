import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080/api';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    
    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {
        console.log('AuthService')
    }

    authenticate(userName: string, password: string): Observable<any> {
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', password);
        return this.http
            .post(
                `${API_URL}/login?username=${userName}&password=${password}`,
                {userName, password},
                {observe: 'response'}
            ).pipe(tap(res => {
                const authToken = res.body.acess_token;
                this.userService.setToken(authToken)
                console.log(`User ${userName} authenticated with token ${authToken}`);
            }));
    }

  }
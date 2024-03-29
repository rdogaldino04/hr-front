import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { environment } from '../../../environments/environment.prod';

const API_URL = environment.BASE_API;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    authenticate(username: string, password: string): Observable<any> {
        const body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        return this.http
            .post(
                `${API_URL}/login`,
                body.toString(),
                options
            ).pipe(tap(res => {
                const authToken = res.acess_token;
                this.userService.setToken(authToken);
                console.log(`User ${username} authenticated with token ${authToken}`);
            }));
    }

}

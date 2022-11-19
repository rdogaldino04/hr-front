import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private username: string;

    constructor(
        private tokenService: TokenService,
        private http: HttpClient
    ) { }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    setUser(user: User) {
        return this.userSubject.next(user)
    }

    private decodeAndNotify() {
        const user = this.decode();
        this.username = user.username;
        this.userSubject.next(user);
    }

    public decode(): User {
        if (!this.tokenService.hasToken())
            return null;
        const token = this.tokenService.getToken();
        const payload = jtw_decode.default(token) as jtw_decode.JwtPayload;
        const user = { id: null, name: null, username: payload.sub, roles: payload['roles'] };
        return user;
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.username;
    }

    save(user: User): Observable<User> {
        return this.http.post<User>(
            `http://localhost:8080/api/users`,
            user
        ).pipe(tap(resp => console.log(resp)));
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(
            `${environment.BASE_API}/users`
          )
          .pipe(map(res => res['_embedded']['users']));
          
    }

}
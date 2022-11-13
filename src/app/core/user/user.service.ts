import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService { 

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;
    
    constructor(private tokenService: TokenService) { }

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
        this.userName = user.name;
        console.log(this.userName)
        this.userSubject.next(user);
        console.log('this.userSubject.next(user);')
    }

    public decode(): User {
        const token = this.tokenService.getToken();
        const payload = jtw_decode.default(token) as jtw_decode.JwtPayload;
        const user = { id: null, name: payload.sub, email: payload.sub };
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
        return this.userName;
    }

}
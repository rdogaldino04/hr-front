import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { UserInput } from './user-input';
import { Pagination } from 'src/app/model/pagination';
import { UserFilter } from '../../model/filter/user-filter';

const API_URL = environment.BASE_API;

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private username: string;

    constructor(
        private tokenService: TokenService,
        private http: HttpClient
    ) { }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    setUser(user: User): void {
        return this.userSubject.next(user);
    }

    private decodeAndNotify(): void {
        const user = this.decode();
        this.username = user.username;
        this.userSubject.next(user);
    }

    public decode(): User {
        if (!this.tokenService.hasToken()) {
            return null;
        }
        const token = this.tokenService.getToken();
        const payload = jtw_decode.default(token) as jtw_decode.JwtPayload;
        const user = { id: null, name: null, username: payload.sub, roles: payload['roles'] };
        return user;
    }

    logout(): void {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    getUserName(): string {
        return this.username;
    }

    save(user: User): Observable<User> {
        return this.http.post<User>(
            `${API_URL}/users`,
            user
        ).pipe(tap(resp => console.log(resp)));
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(
            `${API_URL}/users`
        )
            .pipe(map(res => res['_embedded']['users']));
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(
            `${API_URL}/users/${id}`
        );
    }

    update(id: number, user: UserInput): Observable<User> {
        return this.http.put<User>(
            `${API_URL}/users/${id}`,
            user
        ).pipe(tap(resp => console.log(resp)));
    }

    getUsersPagination(filter?: UserFilter): Observable<Pagination> {
        const params = new HttpParams()
            .set('isPagination', 'true')
            .set('page', filter.page ? String(filter.page) : '')
            .set('name', filter.name ? filter.name : '')
            .set('username', filter.username ? filter.username : '');
        return this.http.get<Pagination>(
            `${API_URL}/users`,
            { params },
        );
    }

}

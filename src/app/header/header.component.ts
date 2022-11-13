import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    user$: Observable<User>;    
    username = '';

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user$ = this.userService.getUser();
    }

    ngOnInit(): void {
        this.userService.setUser(this.userService.decode() ? this.userService.decode() : null);
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }

}
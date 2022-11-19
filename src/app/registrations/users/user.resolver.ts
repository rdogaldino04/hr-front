import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/core/user/user";
import { UserService } from '../../core/user/user.service';

@Injectable()
export class UserResolver implements Resolve<User> {

    constructor(private userService: UserService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        const key = 'id';
        const id = route.params[key];
        return this.userService.getById(id);
    }

}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/user/user.service';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/model/pagination';
import { UserFilter } from '../../../model/filter/user-filter';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  pagination$: Observable<Pagination>;
  paginationDefault = {
    _embedded: { users: [] },
    page: {
      size: 0,
      totalElements: 0,
      totalPages: 0,
      number: 0
    }
  } as Pagination;
  totalPages = 0;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const uf = JSON.parse(window.localStorage.getItem('userFilter')) || { name: '', username: '', page: 0 } as UserFilter;
    window.localStorage.setItem('userFilter', JSON.stringify(uf));
    this.getUsersPagination(uf);
    this.userForm = this.formBuilder.group({
      name: [uf.name],
      username: ['']
    });
  }

  goNewUser(): void {
    this.router.navigate(['registrations', 'users', 'new']);
  }

  goUpdateUser(userId: number): void {
    this.router.navigate(['registrations', 'users', 'edit', userId]);
  }

  goPage(page: number): void {
    const userFilter = {
      name: this.userForm.get('name').value,
      username: this.userForm.get('username').value,
      page
    } as UserFilter;
    this.getUsersPagination(userFilter);
  }

  getPageNumbers(): number[] {
    const pageNumber = this.totalPages;
    const arr = Array.from({ length: pageNumber }, (_, index) => index + 1);
    return arr;
  }

  search(): void {
    const userFilter = this.userForm.getRawValue() as UserFilter;
    window.localStorage.setItem('userFilter', JSON.stringify(userFilter));
    this.getUsersPagination(userFilter);
  }

  private getUsersPagination(userFilter?: UserFilter): void {
    this.pagination$ = this.userService
      .getUsersPagination(userFilter).pipe(tap((pagination: Pagination) => {
        if (!pagination._embedded) {
          pagination._embedded = { users: [] };
        }
        this.totalPages = pagination.page.totalPages;
      }));
  }
}

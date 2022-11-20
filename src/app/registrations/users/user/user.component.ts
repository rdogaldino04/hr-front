import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../core/user/user';
import { UserService } from '../../../core/user/user.service';
import { UserInput } from '../../../core/user/user-input';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.subscription = this.activatedRoute.data
      .subscribe((info: { user: User }) => {
        if (info.user) {
          this.userForm.get('id').setValue(info.user.id);
          this.userForm.get('name').setValue(info.user.name);
          this.userForm.get('username').setValue(info.user.username);
          this.userForm.get('password').clearValidators();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(): void {
    const user = this.userForm.getRawValue() as User;
    this.userService.save(user).subscribe(() => {
      this.router.navigate(['registrations', 'users']);
    },
      err => console.log(err)
    );
  }

  saveOrEdit(): void {
    if (this.userForm.get('id').value) {
      this.edit();
    } else {
      this.save();
    }
  }

  edit(): void {
    const user = { name: this.userForm.get('name').value, username: this.userForm.get('username').value } as UserInput;
    this.userService.update(this.userForm.get('id').value, user).subscribe(() => {
      this.router.navigate(['registrations', 'users']);
    },
      err => console.log(err)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { PlatformDetectorService } from '../core/plataform-detector/platform-detector.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => //this.fromUrl
          //? this.router.navigateByUrl(this.fromUrl)
          //: this.router.navigate(['user', userName]),
          this.router.navigate(['home']),
        err => {
          console.log(err);
          this.loginForm.reset();
          //this.platformDetectorService.isPlatformBrowser &&
            //this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }

}

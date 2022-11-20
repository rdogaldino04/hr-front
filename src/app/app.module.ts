import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsModule } from './core/errors/errors.module';
import { LoginModule } from './login/login.module';
import { RegistrationsModule } from './registrations/registrations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ErrorsModule,
    LoginModule,
    RegistrationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UserModule } from "./users/user.module";
import { RegistrationsRoutesModule } from "./registrations.routing.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RegistrationsRoutesModule,
        UserModule
    ]
})
export class RegistrationsModule {}
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './signup.component.html',
    //providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        console.log('SignUpComponent')
    }

}
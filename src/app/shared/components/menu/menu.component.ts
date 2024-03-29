import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    isShown = false;

    constructor() { }

    toggle(): void {
        this.isShown = !this.isShown;
    }
}

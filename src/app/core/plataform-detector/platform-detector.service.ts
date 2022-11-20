import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser(): boolean {
        console.log('platform: ' + this.platformId);
        return isPlatformBrowser(this.platformId);
    }
}

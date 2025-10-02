import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class Auth {
  private platformId = inject(PLATFORM_ID);
  
  isLoggedIn(): boolean {
    if(isPlatformBrowser(this.platformId)) {  
      return !!localStorage.getItem('access_token');
    }
    return false;
  }
}

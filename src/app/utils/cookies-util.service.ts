import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesUtilService {
  constructor() { }

  public saveAuthenticationStatus(): void {
    localStorage.setItem('Authenticated', 'true');
  }

  public getAuthenticationStatus(): boolean {
    return localStorage.getItem('Authenticated') === 'true';
  }

  public deleteAuthenticationStatus(): void {
    localStorage.removeItem('Authorization');
  }
}

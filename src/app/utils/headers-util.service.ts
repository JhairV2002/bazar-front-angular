import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationHeaderUtils {
  constructor() {}

  public saveTokenInStorage(token: string): void {
    localStorage.setItem('Authorization', token);
  }

  public getTokenFromStorage(): string {
    if (!localStorage.getItem('Authorization')) {
      throw new Error('No hay ningun token disponible para enviar');
    }
    return localStorage.getItem('Authorization')!;
  }
}

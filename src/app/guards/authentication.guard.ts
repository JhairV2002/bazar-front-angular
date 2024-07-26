import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookiesUtilService } from '../utils/cookies-util.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  return inject(CookiesUtilService).getAuthenticationStatus();
};

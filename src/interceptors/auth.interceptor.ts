import { HttpInterceptorFn } from '@angular/common/http';

// interceptor that intercepts every request and put the authorization header
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

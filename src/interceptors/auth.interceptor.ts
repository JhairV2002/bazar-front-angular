import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

// interceptor that intercepts every request and put the authorization header
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let headers: HttpHeaders = req.headers;

  headers.set('Origin', 'http://localhost:4200');


  const reqClone = req.clone({
    withCredentials: true,
    headers: headers
  });
  return next(reqClone);
};

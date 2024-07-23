import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authenticationUrl } from '../../../constants/httpUrlConstants';
import { LoginReqDTO } from '../../../dtos/req/LoginReqDTO';
import { LoginResDTO } from '../../../dtos/res/LoginResDTO';
import { Observable, catchError, of } from 'rxjs';
import { GenericResponseDTO } from '../../../dtos/res';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginUser(
    req: LoginReqDTO,
  ): Observable<GenericResponseDTO<LoginResDTO>> {
    return this.http
      .post<GenericResponseDTO<LoginResDTO>>(authenticationUrl, req)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(err);
        }),
      );
  }
}

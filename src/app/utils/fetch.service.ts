import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, startWith } from "rxjs";
import { GenericResponseDTO } from "../../dtos/res";

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private http: HttpClient) { }

  public genericGetPetition<T>(url: string): Observable<GenericResponseDTO<T | null>> {
    return this.http.get<GenericResponseDTO<T>>(url).pipe(
      map(res => { return { ...res, loading: false } }),
      catchError((error) => {
        console.log(error);
        let errorResponse: GenericResponseDTO<T | null> = {
          code: 0,
          data: null,
          message: error.message,
          status: "error",
          loading: false
        }

        console.log("errorResponse: ", errorResponse);
        return of(errorResponse);
      }),
      startWith({
        code: 0,
        data: null,
        message: "",
        status: "",
        loading: true
      })
    );
  }

  public genericPostPetition<T, R>(url: string, body: R): Observable<GenericResponseDTO<T | null>> {
    return this.http.post<GenericResponseDTO<T>>(url, body).pipe(
      map(res => { return { ...res, loading: false } }),
      catchError((error) => {
        console.log(error);
        let errorResponse: GenericResponseDTO<T | null> = {
          code: 0,
          data: null,
          message: error.message,
          status: "Error",
          loading: false
        }
        console.log("errorResponse: ", errorResponse);
        return of(errorResponse);
      }),
      startWith({
        code: 0,
        data: null,
        message: "",
        status: "",
        loading: true
      })
    );
  }

}

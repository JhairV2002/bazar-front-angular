import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BrandCantProductsResDTO,
  BrandListDTO,
  GenericResponseDTO,
} from '../../../dtos/res';
import {
  createBrandUrl,
  getAllBrandsUrl,
  getBrandsWithProductsCant,
  token,
} from '../../../constants/httpUrlConstants';
import { Observable, catchError, map, of, startWith, tap } from 'rxjs';
import { BrandReqDTO } from '../../../dtos/req';

@Injectable({
  providedIn: 'root',
})
export class BrandsServiceService {
  constructor(private httpClient: HttpClient) { }

  public getBrands(): Observable<BrandListDTO[]> {
    return this.httpClient
      .get<BrandListDTO[]>(getAllBrandsUrl)
      .pipe(
        tap({
          error: (e) => console.log(e),
        })
      );
  }

  public getBrandsProductsCant(): Observable<
    BrandCantProductsResDTO[] | null
  > {
    return this.httpClient
      .get<
        GenericResponseDTO<BrandCantProductsResDTO[]> | GenericResponseDTO<null>
      >(getBrandsWithProductsCant)
      .pipe(
        map((res) => {
          if (res.data != null) {
            console.log('desde brands$', res);
            return res.data;
          } else {
            return [];
          }
        }),
        catchError((error) => {
          console.log(error);
          return of(error.error);
        })
      );
  }

  public createBrand(
    request: BrandReqDTO | null
  ): Observable<GenericResponseDTO<BrandListDTO> | GenericResponseDTO<null>> {
    if (request === null) {
      throw new Error('El nombre de la marca es requerido');
    }

    return this.httpClient
      .post<GenericResponseDTO<BrandListDTO>>(createBrandUrl, request)
      .pipe(catchError((error) => of(error)));
  }
}

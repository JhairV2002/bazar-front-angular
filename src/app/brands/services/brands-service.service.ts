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
  getBrandsWithProducts,
  getBrandsWithProductsCant,
} from '../../../constants/httpUrlConstants';
import { Observable, catchError, map, of, startWith, tap } from 'rxjs';
import { BrandReqDTO } from '../../../dtos/req';
import { FetchService } from '../../utils/fetch.service';

@Injectable({
  providedIn: 'root',
})
export class BrandsServiceService {
  constructor(private httpClient: HttpClient, private fetchService: FetchService) { }

  public getBrands(): Observable<BrandListDTO[]> {
    return this.httpClient
      .get<BrandListDTO[]>(getAllBrandsUrl)
      .pipe(
        tap({
          error: (e) => console.log(e),
        })
      );
  }

  public getBrandsProductsCant(): Observable<GenericResponseDTO<BrandCantProductsResDTO[] | null>> {
    return this.fetchService.genericGetPetition<BrandCantProductsResDTO[] | null>(
      getBrandsWithProductsCant
    );
  }

  public createBrand(
    request: BrandReqDTO | null
  ): Observable<GenericResponseDTO<BrandListDTO | null>> {
    if (request === null) {
      throw new Error('El nombre de la marca es requerido');
    }

    return this.httpClient
      .post<GenericResponseDTO<BrandListDTO>>(createBrandUrl, request)
      .pipe(catchError((error) => of(error)));
  }
}

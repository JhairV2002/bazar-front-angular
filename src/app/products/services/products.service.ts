import { Injectable } from '@angular/core';
import { FetchService } from '../../utils/fetch.service';
import { getAllProductsUrl } from '../../../constants/httpUrlConstants';
import { ProductsResDTO } from '../../../dtos/res/ProductsResDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fetchService: FetchService) { }

  getProducts() {
    return this.fetchService.genericGetPetition<ProductsResDTO[]>(getAllProductsUrl);
  }



}

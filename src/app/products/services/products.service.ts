import { Injectable } from '@angular/core';
import { FetchService } from '../../utils/fetch.service';
import {
  createProductUrl,
  getAllProductsUrl,
  getProductByIdUrl,
  updateProductUrl,
} from '../../../constants/httpUrlConstants';
import { ProductsResDTO } from '../../../dtos/res/ProductsResDTO';
import { ProductReqDTO } from '../../../dtos/req/ProductReqDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fetchService: FetchService) {}

  getProducts() {
    return this.fetchService.genericGetPetition<ProductsResDTO[]>(
      getAllProductsUrl
    );
  }

  createProduct(product: ProductReqDTO) {
    return this.fetchService.genericPostPetition<null, ProductReqDTO>(
      createProductUrl,
      product
    );
  }

  getProductById(id: number) {
    return this.fetchService.genericGetPetition<ProductsResDTO>(
      getProductByIdUrl(id)
    );
  }

  updateProduct(product: ProductReqDTO, id: number) {
    return this.fetchService.genericPutPetition<null, ProductReqDTO>(
      updateProductUrl(id),
      product
    );
  }
}

import { BrandReqDTO } from './BrandReqDTO';

export interface ProductReqDTO {
  productName: string;
  productStock: number;
  productPurchasePrice: number;
  productSalePrice: number;
  productBrand: BrandReqDTO;
}

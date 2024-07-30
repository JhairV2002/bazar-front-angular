import { BrandListDTO } from "./BrandListDTO";

export interface ProductsResDTO {
  productId: number;
  productName: string;
  productStock: number;
  productPurchasePrice: number;
  productSalePrice: number;
  productProfit: number;
  productBrand: BrandListDTO;

}

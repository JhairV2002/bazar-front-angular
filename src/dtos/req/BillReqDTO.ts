import { BrandListDTO } from '../res';
import { ProductsResDTO } from '../res/ProductsResDTO';
import { PromoResDTO } from '../res/PromoResDTO';

export interface BillReqDTO {
  billDate: string;
  billDescription: string;
  billDetail: BillDetail;
  billDetailTotal: number;
  hasBillPromo: boolean;
  promo: PromoResDTO;
}

export interface Product {
  productId: number;
  productName: string;
  productStock: number;
  productPurchasePrice: number;
  productSalePrice: number;
  productProfit: number;
  productBrand: BrandListDTO;
}

export interface BillDetailLine {
  trackingId: string;
  quantity: number;
  totalPriceByProduct: number;
  totalProfitByProduct: number;
  product: ProductsResDTO;
}

export interface BillDetail {
  billDetailLines: BillDetailLine[];
}

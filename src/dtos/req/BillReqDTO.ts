import { ProductReqDTO } from './ProductReqDTO';

export interface BillReqDTO {
  billId: number;
  billDate: Date;
  billDescription: string;
  billDetail: BillDetailReqDTO;
  isActive: boolean;
  billTotal: number;
  billProfit: number;
  billStatus: BillStatusEnum;
  hasProductPromo: boolean;
  hasBillPromo: boolean;
  promoType: PromoTypeEnum;
  promo: PromoReqDTO;
}
export interface BillDetailReqDTO {
  billDetailLines: BillDetailLineReqDTO[];
}
export interface BillDetailLineReqDTO {
  quantity: number;
  totalPriceByProduct: number;
  totalProfitByProduct: number;
  product: ProductReqDTO;
  hasPromo: boolean;
  promo: PromoResDTO | null;
}
export interface PromoReqDTO {
  promoId: number;
  promoName: string;
  promoDescription: string;
  promoType: PromoTypeEnum;
  promoScope: PromoScopeEnum;
  specialPromoX: number;
  specialPromoY: number;
  promoValue: number;
}
export interface PromoResDTO {
  promoId: number;
  promoName: string;
  promoDescription: string;
  promoType: PromoTypeEnum;
  promoScope: PromoScopeEnum;
  promoValue: number;
  specialPromoX: number;
  specialPromoY: number;
}

export enum PromoScopeEnum {
  BILL = 'BILL',
  PRODUCT = 'PRODUCT',
}

export enum PromoTypeEnum {
  DISCOUNTPRODUCT = 'DISCOUNTPRODUCT',
  DISCOUNTBILL = 'DISCOUNTBILL',
  SPECIALPROMOS = 'SPECIALPROMOS',
}

export enum BillStatusEnum {
  PAGADO = 'PAGADO',
  PENDIENTE = 'PENDIENTE',
  DEVUELTO = 'DEVUELTO',
  CANCELADO = 'CANCELADO',
}

export interface SpecialPromoResDTO {
  promoId: number;
  promoName: string;
  promoDescription: string;
  promoType: string;
  promoScope: string;
  specialPromoX: number;
  specialPromoY: number;
}

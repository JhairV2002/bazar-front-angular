import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ProductsService } from '../../../products/services/products.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { createRandomUUID, isObjectEmpty } from '../../../utils/utilFuncs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PromosListComponent } from '../../../promos/components/promos-list/promos-list.component';
import { BillResDTO } from '../../../../dtos/res/BillResDTO';
import { PromoResDTO } from '../../../../dtos/req/BillReqDTO';

@Component({
  selector: 'app-create-bill-page',
  standalone: true,
  imports: [
    AlertComponent,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    PromosListComponent,
    MatCheckboxModule,
  ],
  templateUrl: './create-bill-page.component.html',
  providers: [provideNativeDateAdapter()],
  animations: [],
})
export class CreateBillPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private productService: ProductsService = inject(ProductsService);
  public billDetailTotalWithPromo: number = 0;

  products$ = this.productService
    .getProducts()
    .pipe(map((products) => products.data));

  billForm = this.fb.group({
    billDate: [''],
    billDescription: [''],
    billDetail: this.fb.group({
      billDetailLines: this.fb.array([
        this.fb.group({
          trackingId: createRandomUUID(),
          quantity: [1],
          totalPriceByProduct: [0],
          totalProfitByProduct: [0],
          product: [null],
        }),
      ]),
    }),
    billDetailTotal: [0],
    hasBillPromo: [false],
    promo: [null],
  });

  onSubmit() {
    console.warn(this.billForm.value);
  }

  get products() {
    return this.billForm.get('billDetail')!.get('billDetailLines') as FormArray;
  }

  get billDetailTotalValue() {
    return this.billForm.get('billDetailTotal')?.getRawValue() as number;
  }

  get hasBillPromo() {
    return this.billForm.get('hasBillPromo')?.getRawValue() as boolean;
  }

  get promo() {
    return this.billForm.get('promo')?.getRawValue() as PromoResDTO;
  }

  get billDetailTotalControl() {
    return this.billForm.get('billDetailTotal') as FormControl;
  }

  set billDetailTotalControl(value: FormControl) {
    console.log('Bill detail total control', value);
    this.billForm.patchValue({ billDetailTotal: value.value });
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }

  calculateBillTotal() {
    let total = 0;
    this.products.controls.forEach((product) => {
      total += product.get('totalPriceByProduct')!.value;
    });
    this.billForm.patchValue({ billDetailTotal: total });

    if (this.hasBillPromo && this.promo) {
      let totalWithDiscount = 0;
      const promoValue = this.promo.promoValue;
      const valueDiscounted = total * promoValue;
      const billDetailTotalDiscounted = total - valueDiscounted;
      totalWithDiscount = billDetailTotalDiscounted;
      this.billDetailTotalWithPromo = totalWithDiscount;
    }
  }

  addProduct() {
    this.products.push(
      this.fb.group({
        trackingId: createRandomUUID(),
        quantity: [1],
        totalPriceByProduct: [0],
        totalProfitByProduct: [0],
        product: [null, Validators.required],
      })
    );
    console.log('Products', this.products.value);
  }

  removeProduct(index: number) {
    console.log('Product removed');
    console.log('index', index);
    console.log(this.products.controls[index].value);
    this.products.removeAt(index, { emitEvent: true });
    this.billForm.valueChanges.subscribe((value) => {
      console.log('Products in value changesss', value);
    });
    this.calculateBillTotal();
    console.log('Products', this.products.value);
  }

  saveBill() {
    console.log('Bill saved');
    console.log(this.billForm.value);
  }

  calculateSubtotal(index: number) {
    const product = this.products.controls[index] as FormGroup;
    const productData = this.products.controls[index].value;
    //console.log(productData);
    let cant = productData.quantity;
    if ((cant >= 1 || cant != null) && !isObjectEmpty(productData.product)) {
      const productPrice = productData.product.productSalePrice;
      product.patchValue({ totalPriceByProduct: cant * productPrice });
      this.calculateBillTotal();
    }
  }

  onHasPromoChange() {
    if (!this.hasBillPromo) {
      this.billForm.get('promo')?.clearValidators();
      this.billForm.patchValue({ promo: null });
      return;
    }
    this.billForm.get('promo')?.setValidators(Validators.required);
    console.log(this.billForm);
  }
}

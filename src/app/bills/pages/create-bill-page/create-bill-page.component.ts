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
} from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ProductsService } from '../../../products/services/products.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { createRandomUUID, isObjectEmpty } from '../../../utils/utilFuncs';

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
  ],
  templateUrl: './create-bill-page.component.html',
})
export class CreateBillPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private productService: ProductsService = inject(ProductsService);

  products$ = this.productService
    .getProducts()
    .pipe(map((products) => products.data));

  billForm = this.fb.group({
    billDate: [''],
    billDescription: [''],
    billDetail: this.fb.group({
      billDetailLines: this.fb.array([]),
    }),
    billDetailTotal: [0],
  });

  onSubmit() {
    console.warn(this.billForm.value);
  }

  get products() {
    return this.billForm.get('billDetail')!.get('billDetailLines') as FormArray;
  }

  get billDetailTotal() {
    return this.billForm.get('billDetailTotal')?.getRawValue() as number;
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
  }

  addProduct() {
    this.products.push(
      this.fb.group({
        trackingId: createRandomUUID(),
        quantity: [1],
        totalPriceByProduct: [0],
        totalProfitByProduct: [0],
        product: [{}],
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
}

import { Component, inject } from '@angular/core';
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
  ],
  templateUrl: './create-bill-page.component.html',
})
export class CreateBillPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  billForm = this.fb.group({
    date: [''],
    description: [''],
    products: this.fb.array([
      this.fb.group({
        cant: [0],
        product: [''],
        total: [0],
      }),
    ]),
  });

  onSubmit() {
    console.warn(this.billForm.value);
  }

  get products() {
    return this.billForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(
      this.fb.group({
        cant: [0],
        product: [''],
        total: [0],
      })
    );
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }
}

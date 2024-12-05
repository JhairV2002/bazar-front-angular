import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { PromosService } from '../../services/promos.service';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-promos-list',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './promos-list.component.html',
})
export class PromosListComponent {
  @Input() public formGroup: FormGroup;
  @Input() public billDetailTotal: number;
  @Input() public billDetailTotalWithPromo: number;
  @Output() public billDetailTotalWithPromoChange = new EventEmitter();

  private promosService: PromosService = inject(PromosService);

  promos$ = this.promosService.getPromos().pipe(map((promos) => promos.data));

  onPromoChange($event: any) {
    console.log($event);
    let promoValue = this.billDetailTotal * $event.promoValue;
    console.log('promoValue', promoValue);
    let billTotalWithPromo = this.billDetailTotal - promoValue;
    console.log('billTotalWithPromo', billTotalWithPromo);
    this.billDetailTotalWithPromoChange.emit(billTotalWithPromo);
  }
}

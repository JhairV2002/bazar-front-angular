import { Component, inject, Input, OnDestroy } from '@angular/core';
import { PromosService } from '../../services/promos.service';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  private promosService: PromosService = inject(PromosService);

  promos$ = this.promosService.getPromos().pipe(map((promos) => promos.data));
}

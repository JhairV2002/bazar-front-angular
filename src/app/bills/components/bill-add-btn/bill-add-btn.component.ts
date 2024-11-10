import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-add-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './bill-add-btn.component.html',
})
export class BillAddBtnComponent {
  constructor(private router: Router) {}

  searchText: string = '';

  redirectToAddBill() {
    this.router.navigate(['app/billing/create']);
  }

  @Input() action: () => void = () => {};
}

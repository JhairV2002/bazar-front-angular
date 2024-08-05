import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product-btn',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './add-product-btn.component.html',
})
export class AddProductBtnComponent {
  constructor(private router: Router) {}

  redirectToAddProduct() {
    this.router.navigate(['/app/products/create']);
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bill-add-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './bill-add-btn.component.html',
})
export class BillAddBtnComponent {
  constructor() {}
}

import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-brands-table',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './brands-table.component.html',
  styleUrl: './brands-table.component.css',
})
export class BrandsTableComponent {}

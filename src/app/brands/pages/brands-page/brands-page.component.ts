import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrandsFormComponent } from '../../components/brands-form/brands-form.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrandsListComponent } from '../../components/brands-list/brands-list.component';
import { BrandListDTO, GenericResponseDTO } from '../../../../dtos/res';

@Component({
  selector: 'app-brands-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    BrandsFormComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    BrandsListComponent,
  ],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.css',
})
export class BrandsPageComponent {
  public searchText = new FormControl<string>('');

  constructor(public dialog: MatDialog) {}
}

import { Component } from '@angular/core';
import { BrandsServiceService } from '../../services/brands-service.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {
  BrandListDTO,
  GenericResponseDTO,
} from '../../../../dtos/res';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrandsFormComponent } from '../brands-form/brands-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AlertComponent } from '../../../utilComponents/alert/alert.component';
import { LoaderComponent } from '../../../utilComponents/loader/loader.component';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButton,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    AlertComponent,
    LoaderComponent,
    MatSnackBarModule
  ],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.css',
})
export class BrandsListComponent {
  constructor(
    private brandService: BrandsServiceService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }
  public displayedColumns: string[] = ['Id', 'Nombre', 'Productos', 'Acciones'];
  public errorMessage: string = '';

  brands$ = this.brandService.getBrandsProductsCant();

  openDialog(): void {
    const dialogRef = this.dialog.open(BrandsFormComponent);
    dialogRef
      .afterClosed()
      .subscribe((result: GenericResponseDTO<BrandListDTO | null>) => {
        this.brands$ = this.brandService.getBrandsProductsCant();
        this.snackbar.open(result.message, 'Cerrar', { duration: 3000 })
      });
  }
}

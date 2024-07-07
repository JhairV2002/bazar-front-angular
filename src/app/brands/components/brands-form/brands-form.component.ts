import { Component, Inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BrandsServiceService } from '../../services/brands-service.service';

@Component({
  selector: 'app-brands-form',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './brands-form.component.html',
  styleUrl: './brands-form.component.css',
})
export class BrandsFormComponent {
  constructor(
    public dialogRef: MatDialogRef<BrandsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { response: any },
    private brandsService: BrandsServiceService
  ) {}

  public brandName = new FormControl<string>('');

  onNoClick(): void {
    this.dialogRef.close();
  }

  createBrand(): void {
    this.brandsService
      .createBrand({ brandName: this.brandName.value! })
      .subscribe((res) => {
        if (res.code != 201) {
          this.dialogRef.close({ error: res });
        }
        console.log(res);
        this.dialogRef.close(res);
      });
  }
}

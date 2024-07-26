import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LoaderComponent } from '../../utilComponents/loader/loader.component';
import { LoginService } from '../services/login.service';
import { AlertComponent } from '../../utilComponents/alert/alert.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIcon,
    LoaderComponent,
    AlertComponent,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
  ) {}
  public loading: boolean = false;
  public submitBtnText: string = 'Iniciar Sesión';
  public loadingBtnText: string = 'Cargando';
  public isSubmitBtnDisabled: boolean = false;
  public loadingSpinnerDiameter: number = 20;

  public loginFormGroup = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public swapBtnText(): void {
    if (this.isSubmitBtnDisabled) {
      this.submitBtnText = this.loadingBtnText;
    } else {
      this.submitBtnText = 'Iniciar Sesión';
    }
  }

  public toggleActiveBtn(): void {
    console.log('cambiando estado del botón');

    this.isSubmitBtnDisabled = !this.isSubmitBtnDisabled;
    this.swapBtnText();
  }

  public cleanForm = () => {
    this.loginFormGroup.get('username')?.setValue('');
    this.loginFormGroup.get('password')?.setValue('');
  };

  public loginUser = () => {
    this.toggleActiveBtn();
    console.log(this.loginFormGroup.value);
    console.log('iniciando proceso de login');

    this.loginService
      .loginUser({
        username: this.loginFormGroup.get('username')?.getRawValue(),
        password: this.loginFormGroup.get('password')?.getRawValue(),
      })
      .subscribe((res) => {
        console.log(res);
        this.snackBar.open(res.message, 'Cerrar', {
          duration: 3000,
        });
        this.toggleActiveBtn();
        this.cleanForm();
      });
  };
}

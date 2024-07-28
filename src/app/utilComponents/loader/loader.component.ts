import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule, AlertComponent],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  @Input() isLoading: boolean = false;
}

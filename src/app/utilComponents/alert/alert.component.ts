import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input()
  public message: string = '';
  @Input()
  public icon: string = '';
  @Input()
  public color: 'accent' | 'primary' | 'warn' = 'primary';
}

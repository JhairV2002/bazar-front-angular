import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule, MatIconModule, MatInputModule
  ],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Input() inputValue: string = '';
  @Input() placeholder: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  onInputValueKeyUp(event: any) {
    this.inputValueChange.emit(this.inputValue);
  }


}

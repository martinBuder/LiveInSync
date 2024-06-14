import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Category } from '../../../interfaces/category';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements AfterViewInit {
  @Input() options: Category[] = [];
  @Input() optionValue?: Category;
  @Output() selectionChange = new EventEmitter<Category>();
  protected selectedOption?: Category;

  ngAfterViewInit() {
    if (this.options.length > 0) this.setOption();
  }

  private setOption(): void {
    if (this.optionValue) {
      const i = this.options.findIndex(
        (option) => option.name === this.optionValue?.name
      );
      console.log(i);

      if (i !== -1) this.selectedOption = this.options[i];
      else this.selectedOption = this.options[0];
    } else this.selectedOption = this.options[0];
  }

  onSelectionChange(selected: Category) {
    this.selectionChange.emit(selected);
  }
}

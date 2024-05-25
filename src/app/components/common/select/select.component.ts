import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit {
  @Input() options: Category[] = [];
  @Output() selectionChange = new EventEmitter<Category>();
  protected selectedOption?: Category;

  ngOnInit() {
    if (this.options.length > 0) {
      this.selectedOption = this.options[0];
      this.selectionChange.emit(this.selectedOption);
    }
  }

  onSelectionChange(selected: Category) {
    this.selectionChange.emit(selected);
  }
}

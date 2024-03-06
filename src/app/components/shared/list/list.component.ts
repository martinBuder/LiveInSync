import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  // @Input() itemsArray !: Observable<any>
  @Input() itemsArray !: Array<any>


  constructor() {
    this.itemsArray = [
      {title: 'test'},
      {title: 'test'},
      {title: 'test'}
    ]
  }

  openEdit(i?: number) {

  }


}

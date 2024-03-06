import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-editable',
  standalone: true,
  imports: [ButtonComponent, InputComponent, TranslateModule, MatIconModule],
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss'
})
export class EditableComponent {
  @Input() item?: any;
  @Input() openClose !:boolean;
  @Output() closing = new EventEmitter<void>();
  @Output() openCloseChange = new EventEmitter<boolean>();


  constructor(protected utilService: UtilService) {}

  protected delete():void {

  }

  protected save():void {

  }

  public closeWindow = ():void => {          
    this.openClose = !this.openClose;
    this.openCloseChange.emit(this.openClose);
    
  }
}

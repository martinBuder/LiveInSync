import { Component} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewHomeUtilService } from '../../../services/utils/new-home-util.service';
import { NewHomeComponent } from '../../dialogs/new-home/new-home.component';
import { CommonModule } from '@angular/common';
import { UserFormMapper } from '../../../mapper/userForm.mapper';
import { UtilService } from '../../../services/utils/util.service';

@Component({
  selector: 'app-start-site',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonComponent,
    InputComponent,
    NewHomeComponent
  ],
  templateUrl: './start-site.component.html',
  styleUrl: './start-site.component.scss'
})

export class StartSiteComponent{
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';

  constructor(
    protected utilService: UtilService,
    protected formBuilder: FormBuilder,
    protected newHomeUtilService: NewHomeUtilService
    ) {
    this.formGroup = formBuilder.group(UserFormMapper.logInForm);  
  }

   logIn():void {
    this.newHomeUtilService.openNewHomeDialog = true;
    // this.utilService.navigateTo('todo');
  }

  togglePasswordVisibility(): void {
    this.passwordIcon = (this.passwordIcon === 'visibility') ? 'visibility_off' : 'visibility';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }



}

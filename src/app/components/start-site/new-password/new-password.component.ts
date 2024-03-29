import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserFormMapper } from '../../../mapper/userForm.mapper';
import { matchpassword } from '../../../validators/matchpassword.validator';
import { UtilService } from '../../../services/utils/util.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { SavedPasswordComponent } from '../../dialogs/saved-password/saved-password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-password',
  standalone: true,
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonComponent,
    InputComponent,
    SavedPasswordComponent,
  ],
})
export class NewPasswordComponent {
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';
  protected validForm: boolean = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected utilService: UtilService
  ) {
    this.formGroup = formBuilder.group(UserFormMapper.newPasswordForm, {
      validators: matchpassword,
    });
  }

  togglePasswordVisibility(): void {
    this.passwordIcon =
      this.passwordIcon === 'visibility' ? 'visibility_off' : 'visibility';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  saveNewPassword(): void {
    this.utilService.showTimedDialog('');
  }
}

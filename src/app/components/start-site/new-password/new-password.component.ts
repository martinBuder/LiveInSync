import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserFormMapper } from '../../../mapper/userForm.mapper';
import { matchpassword } from '../../../validators/matchpassword.validator';
import { UtilService } from '../../../services/utils/util.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from '../../dialogs/message/dialog-message.component';
import { AuthService } from '../../../services/global/backend/auth.service';

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
    DialogMessageComponent,
  ],
})
export class NewPasswordComponent {
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';
  protected validForm: boolean = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected utilService: UtilService,
    protected authService: AuthService
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

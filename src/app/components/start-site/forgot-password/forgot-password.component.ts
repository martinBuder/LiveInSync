import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { UtilService } from '../../../services/utils/util.service';
import { UserFormMapper } from '../../../mapper/userForm.mapper';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  protected formGroup!: FormGroup;

  constructor(
    protected utilService: UtilService,
    protected formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(UserFormMapper.forgotPasswordForm);
  }

  // !is just for the dev - later we get a mail and this will happend by mail
  getMail() {
    const mail = this.formGroup.get('email')?.value;
    this.utilService.navigateTo('newPassword');
  }
}

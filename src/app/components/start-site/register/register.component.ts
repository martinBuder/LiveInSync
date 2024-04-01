import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilService } from '../../../services/utils/util.service';
import { UserFormMapper } from '../../../mapper/userForm.mapper';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { matchpassword } from '../../../validators/matchpassword.validator';
import { AuthService } from '../../../services/global/backend/auth.service';
import { UserProfileService } from '../../../services/global/backend/userProfile.service';
import { DialogMessageComponent } from '../../dialogs/message/dialog-message.component';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonComponent,
    InputComponent,
    DialogMessageComponent,
  ],
})
export class RegisterComponent {
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';
  protected validForm: boolean = false;

  constructor(
    protected utilService: UtilService,
    protected formBuilder: FormBuilder,
    protected authService: AuthService,
    private userProfileService: UserProfileService
  ) {
    this.formGroup = formBuilder.group(UserFormMapper.registerForm, {
      validators: matchpassword,
    });
  }

  togglePasswordVisibility(): void {
    this.passwordIcon =
      this.passwordIcon === 'visibility' ? 'visibility_off' : 'visibility';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  async createNewAccount(): Promise<void> {
    this.userProfileService.user = {
      name: this.formGroup.value.name,
      mail: this.formGroup.value.email,
    };
    const password = this.formGroup.value.password;
    await this.authService.createUser(
      this.userProfileService.user.mail,
      password
    );
    this.utilService.showTimedDialog('');
  }
}

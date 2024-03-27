import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilService } from '../../../services/utils/util.service';
import { UserFormMapper } from '../../../mapper/userForm.mapper';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';
  protected validForm: boolean = false;


constructor(
  protected utilService: UtilService,
  protected formBuilder: FormBuilder,
  ) {
  this.formGroup = formBuilder.group(UserFormMapper.registerForm);  
}



togglePasswordVisibility(): void {
  this.passwordIcon = (this.passwordIcon === 'visibility') ? 'visibility_off' : 'visibility';
  this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
}

}
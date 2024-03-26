import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormMapper } from '../../../mapper/form.mapper';

@Component({
  selector: 'app-start-site',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './start-site.component.html',
  styleUrl: './start-site.component.scss'
})

export class StartSiteComponent {
  protected formGroup!: FormGroup;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(FormMapper.logInForm);
  }

  logIn():void {

  }

  togglePasswordVisibility(): void {
    this.passwordIcon = (this.passwordIcon === 'visibility') ? 'visibility_off' : 'visibility';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }
}

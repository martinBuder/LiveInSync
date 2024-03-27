import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormMapper } from '../../../mapper/form.mapper';
import { NewHomeUtilService } from '../../../services/utils/new-home-util.service';
import { NewHomeComponent } from '../../dialogs/new-home/new-home.component';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-site',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMapper,
    TranslateModule,
    ObserversModule,
    ButtonComponent,
    InputComponent,
    NewHomeComponent
  ],
  templateUrl: './start-site.component.html',
  styleUrl: './start-site.component.scss'
})

export class StartSiteComponent{
  protected formGroup!: FormGroup;
  protected formSubscription !: Subscription;
  protected passwordIcon: string = 'visibility';
  protected passwordType: string = 'password';
  protected validForm: boolean = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected newHomeUtilService: NewHomeUtilService
    ) {
    this.formGroup = formBuilder.group(FormMapper.logInForm);  
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

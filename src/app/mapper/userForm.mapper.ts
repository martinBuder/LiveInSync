import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class UserFormMapper {

  //formFields
  static emailField = ['', [Validators.maxLength(60), Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]];
  static passwordField = ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]];
  static nameField = ['', [Validators.required, Validators.maxLength(60), Validators.minLength(2)]]; 

  //forms
  static logInForm =  {
      email: UserFormMapper.emailField,
      password: UserFormMapper.passwordField
  }

  static registerForm =  {
    name: UserFormMapper.nameField,
    email: UserFormMapper.emailField,
    password: UserFormMapper.passwordField,
    comparePassword: UserFormMapper.passwordField
  }

  static forgotPasswordForm = {
    email: UserFormMapper.emailField,
  }

  static newPasswordForm =  {
    password: UserFormMapper.passwordField,
    comparePassword: UserFormMapper.passwordField
  }

}
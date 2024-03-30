import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserFormMapper {
  //formFields
  static nameField = ['', [Validators.required]];
  static emailField = [
    '',
    [
      Validators.maxLength(60),
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ],
  ];
  static passwordField = [
    '',
    [Validators.required, Validators.maxLength(30), Validators.minLength(8)],
  ];

  /**
   *    if we want to control both passwords are the same added validator:matchpassword by password building like this:
   *    this.formGroup = formBuilder.group(UserFormMapper.registerForm, {
   *     validators:matchpassword
   *    });
   */
  static comparePasswordField = ['', [Validators.required]];

  //forms
  static logInForm = {
    email: UserFormMapper.emailField,
    password: UserFormMapper.passwordField,
  };

  static registerForm = {
    name: UserFormMapper.nameField,
    email: UserFormMapper.emailField,
    password: UserFormMapper.passwordField,
    comparePassword: UserFormMapper.comparePasswordField,
  };

  static forgotPasswordForm = {
    email: UserFormMapper.emailField,
  };

  static newPasswordForm = {
    password: UserFormMapper.passwordField,
    comparePassword: UserFormMapper.comparePasswordField,
  };
}

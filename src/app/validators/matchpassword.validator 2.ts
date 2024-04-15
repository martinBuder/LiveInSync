// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchpassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let password = control.get('password');
  let comparePassword = control.get('comparePassword');

  if (password && comparePassword && password.value !== comparePassword.value) {
    return {
      passwordmatcherror: true
    };
  }

  return null;
};


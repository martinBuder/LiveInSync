import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class FormMapper {
    
  static logInForm =  {
      email: [
          '',
          [Validators.maxLength(60), Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]
        ],
      password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]],
  }

  static todoForm =  {
    title: [
        '',
        [Validators.maxLength(256), Validators.required, Validators.minLength(1)]
      ],
      description: ['', [Validators.maxLength(1256), Validators.minLength(1)]],
      done: [false],
      read: [false],
}
  

 }
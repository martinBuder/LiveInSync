import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class TodoMapper {
    static form =  {
      title: [
          '',
          [Validators.maxLength(256), Validators.required, Validators.minLength(1)]
        ],
        description: ['', [Validators.maxLength(1256), Validators.minLength(1)]],
        done: [false],
        read: [false],
      }
  

 }
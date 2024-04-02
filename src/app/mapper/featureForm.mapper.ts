import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FeatureFormMapper {
  // formFields
  static titleField = [
    '',
    [Validators.maxLength(256), Validators.required, Validators.minLength(1)],
  ];
  static descriptionField = [
    '',
    [Validators.maxLength(1256), Validators.minLength(1)],
  ];
  static doneField = [false];
  static readField = [false];
  static featuresField = [];

  // forms
  static todoForm = {
    title: FeatureFormMapper.titleField,
    description: FeatureFormMapper.descriptionField,
    done: FeatureFormMapper.doneField,
    read: FeatureFormMapper.readField,
  };

  static addHomeForm = {
    title: FeatureFormMapper.titleField,
    features: FeatureFormMapper.featuresField,
  };
}

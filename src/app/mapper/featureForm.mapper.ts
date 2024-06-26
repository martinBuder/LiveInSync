import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';

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
  static dateField = ['', [Validators.required]];
  static timeField = [];
  static allDayField = [false];
  static featuresField = [];
  static repetitionField = [];
  static categoryField = [];
  static homeAdminField = [
    '',
    [Validators.maxLength(35), Validators.minLength(2)],
  ];

  // forms
  static todoForm = {
    title: FeatureFormMapper.titleField,
    description: FeatureFormMapper.descriptionField,
    done: FeatureFormMapper.doneField,
    read: FeatureFormMapper.readField,
  };

  static shoppingForm = {
    title: FeatureFormMapper.titleField,
    description: FeatureFormMapper.descriptionField,
    done: FeatureFormMapper.doneField,
    read: FeatureFormMapper.readField,
    category: FeatureFormMapper.categoryField,
  };

  static calendarForm = {
    title: FeatureFormMapper.titleField,
    description: FeatureFormMapper.descriptionField,
    done: FeatureFormMapper.doneField,
    read: FeatureFormMapper.readField,
    allDay: FeatureFormMapper.allDayField,
    date: FeatureFormMapper.dateField,
    time: FeatureFormMapper.timeField,
    repetition: FeatureFormMapper.repetitionField,
    category: FeatureFormMapper.categoryField,
  };

  static cleaningForm = {
    title: FeatureFormMapper.titleField,
    description: FeatureFormMapper.descriptionField,
    done: FeatureFormMapper.doneField,
    read: FeatureFormMapper.readField,
    date: FeatureFormMapper.dateField,
    repetition: FeatureFormMapper.repetitionField,
    category: FeatureFormMapper.categoryField,
  };

  static addHomeForm = {
    title: FeatureFormMapper.titleField,
    features: FeatureFormMapper.featuresField,
  };

  static settingHomeForm = {
    title: FeatureFormMapper.titleField,
    features: FeatureFormMapper.featuresField,
    homeAdmin: FeatureFormMapper.homeAdminField,
  };

  static connectHomeForm = {
    title: FeatureFormMapper.titleField,
  };
}

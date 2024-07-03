import { Component } from '@angular/core';
import { BaseDirective } from '../f-base/base.directive';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIcon,
    MatButton,
    MatFormField,
    MatInput,
    MatIconButton
  ]
})
export class InputNumberComponent extends BaseDirective {
  protected readonly Object = Object;

  protected onIconClick() {
    this.form.controls[this.config.name].setValue(null);
  }
}

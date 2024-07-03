import {Component} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatIcon,
  ]
})
export class SearchInputComponent extends BaseDirective {
  protected readonly Object = Object;

  protected onIconClick() {
    this.form.controls[this.config.name].setValue(null);
  }
}

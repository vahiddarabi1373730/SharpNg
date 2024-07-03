import {Component} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormField,
    MatOption,
    MatSelect,
  ]
})
export class RadioComponent extends BaseDirective {}

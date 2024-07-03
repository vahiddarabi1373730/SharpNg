import {Component} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  imports:[ CommonModule,
    FormsModule,
    MatFormField,
    MatSelect,
    ReactiveFormsModule,],
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseDirective {}

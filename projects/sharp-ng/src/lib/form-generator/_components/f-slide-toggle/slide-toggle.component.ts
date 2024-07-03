import {Component} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatSlideToggle,
    ReactiveFormsModule,
    MatFormField,
  ]
})
export class SlideToggleComponent extends BaseDirective {}

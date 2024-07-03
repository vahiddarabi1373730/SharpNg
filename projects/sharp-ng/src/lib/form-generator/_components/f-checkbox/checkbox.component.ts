import { Component } from '@angular/core';
import { BaseDirective } from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-f-checkbox',
  templateUrl: './checkbox.component.html',
  standalone:true,
  imports:[CommonModule,MatCheckboxModule],
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends BaseDirective {}

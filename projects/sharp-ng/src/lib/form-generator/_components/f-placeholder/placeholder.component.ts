import { Component } from '@angular/core';
import { BaseDirective } from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-f-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  standalone:true,
  imports:[
    CommonModule, ReactiveFormsModule
  ]
})
export class PlaceholderComponent extends BaseDirective {}

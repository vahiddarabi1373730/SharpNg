import {Component, OnInit} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelect} from "@angular/material/select";
import {MatAutocomplete} from "@angular/material/autocomplete";

@Component({
  selector: 'app-server-search-input',
  templateUrl: './server-search-input.component.html',
  styleUrls: ['./server-search-input.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatButton,
    MatFormField,
    ReactiveFormsModule,
    MatIcon,
    MatInput,
    MatSelect,
    MatAutocomplete,
  ]
})
export class ServerSearchInputComponent implements OnInit
{
  ngOnInit() {
  }
}

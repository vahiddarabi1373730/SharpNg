import {Component} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatMenu} from "@angular/material/menu";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-f-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatButton,
    ReactiveFormsModule,
    FormsModule,
    MatMenu,
    MatInput,
    MatFormField,
    MatSelectModule,
  ]
})
export class MenuComponent extends BaseDirective {
  protected onClosed(value: string) {
    this.form.controls[this.config.name].setValue(value);
  }
}

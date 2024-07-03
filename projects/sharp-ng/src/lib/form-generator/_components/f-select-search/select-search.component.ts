import {Component, inject} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {CommonModule} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  imports:[ CommonModule,
    FormsModule,
    MatFormField,
    MatSelect,
    ReactiveFormsModule,],
  standalone:true
})
export class SelectSearchComponent extends BaseDirective {
  private apiService = inject(ApiService);
  protected options: KeyValueInterface[] = [];

  constructor() {
    super();
    this.apiService
      .get(this.config.configForSelectSearch.url, {
        params: this.config.configForSelectSearch.params,
        responseType: 'json',
      })
      .subscribe((res) => {
        this.options = res.data.map((option) => ({
          key: option[this.config.configForSelectSearch.keyField],
          value: option[this.config.configForSelectSearch.valueField],
        }));
      });
  }
}

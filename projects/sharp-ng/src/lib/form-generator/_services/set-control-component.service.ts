import { Injectable, Type } from '@angular/core';
import { FormControlConfigInterface } from '../_models/form-generator.interface';
import { CheckBoxComponent } from '../../_components/check-box/check-box.component';
import { SearchInputComponent } from '../_components/f-search-input/search-input.component';
import { InputNumberComponent } from '../_components/f-input-number/input-number.component';
import { SelectComponent } from '../_components/f-select/select.component';
import { PlaceholderComponent } from '../_components/f-placeholder/placeholder.component';
import { ServerSearchInputComponent } from '../_components/f-server-search-input/server-search-input.component';
import { MenuComponent } from '../_components/f-menu/menu.component';
import { GroupComponent } from '../_components/f-group/group.component';
import { SelectSearchComponent } from '../_components/f-select-search/select-search.component';
import { RadioComponent } from '../_components/f-radio/radio.component';
import { SlideToggleComponent } from '../_components/f-slide-toggle/slide-toggle.component';

type ControlTypeComponent = {
  [T in FormControlConfigInterface['controlType']]: Type<any>;
};

@Injectable({
  providedIn: 'root',
})
export class SetControlComponentService {
  constructor() {}

  private componentsType: ControlTypeComponent = {
    'f-checkbox': CheckBoxComponent,
    'f-input': SearchInputComponent,
    'f-input-number': InputNumberComponent,
    'f-select': SelectComponent,
    'f-placeholder': PlaceholderComponent,
    'f-server-search-input': ServerSearchInputComponent,
    'f-menu': MenuComponent,
    'f-group': GroupComponent,
    'f-select-search': SelectSearchComponent,
    'f-radio': RadioComponent,
    'f-slide-toggle': SlideToggleComponent,
  };

  resolve(type: string) {
    return this.componentsType[type];
  }
}

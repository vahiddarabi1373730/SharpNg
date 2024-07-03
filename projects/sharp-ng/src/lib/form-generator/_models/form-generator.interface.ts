import {
  KeyValueChildInterface,
  KeyValueInterface,
} from '../../../_core/_models/interfaces';
import { ValidatorFn, Validators } from '@angular/forms';
import { ServerSearchInputParamsInterface } from '../_components/f-server-search-input/_models/server-search-input';

export interface FormConfigInterface {
  hasSubmitButton?: boolean;
  titleButton?: string;
  controls?: FormControlConfigInterface[];
}

type CustomValidators = { numbersOnly: ValidatorFn };
type ValidationType = keyof Omit<
  typeof Validators & CustomValidators,
  'prototype' | 'compose' | 'composeAsync'
>;

export interface FormControlConfigInterface {
  name: string;
  controlType: Type;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  inputType?: InputType;
  extraData?: any;
  validators?: { [key in ValidationType]?: unknown };
  isShow?: boolean;
  options?: KeyValueInterface[];
  disabled?: boolean;
  url?: string;
  params?: ServerSearchInputParamsInterface;
  menuOptions?: KeyValueChildInterface[];
  controlStyle?: Partial<CSSStyleDeclaration>;
  controlClass?: string | string[];
  hostStyle?: Partial<CSSStyleDeclaration>;
  hostClass?: string | string[];
  controls?: FormConfigInterface['controls'];
  isChecked?: boolean;
  hasDeleteFormGroup?: boolean;
  configRadio?: KeyValueInterface[];
  configForSelectSearch?: {
    url: string;
    params: {
      [key: string]: any;
    };
    keyField: string;
    valueField: string;
  };
  hideClearIcon?: boolean;
}

export type Type =
  | 'f-input'
  | 'f-input-number'
  | 'f-server-search-input'
  | 'f-select'
  | 'f-placeholder'
  | 'f-checkbox'
  | 'f-radio'
  | 'f-slide-toggle'
  | 'f-menu'
  | 'f-select-search'
  | 'f-group';
export type InputType = 'text' | 'number';

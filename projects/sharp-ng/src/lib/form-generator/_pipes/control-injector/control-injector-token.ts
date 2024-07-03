import { InjectionToken } from '@angular/core';
import { FormControlConfigInterface } from '../../_models/form-generator.interface';

export const CONTROL_INJECTOR_TOKEN =
  new InjectionToken<FormControlConfigInterface>('CONTROL_INJECTOR_TOKEN');

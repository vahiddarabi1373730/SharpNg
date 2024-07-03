import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { FormControlConfigInterface } from '../../_models/form-generator.interface';
import { CONTROL_INJECTOR_TOKEN } from './control-injector-token';

@Pipe({
  name: 'controlInjector',
})
export class ControlInjectorPipe implements PipeTransform {
  private injector = inject(Injector);

  transform(config: FormControlConfigInterface): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: CONTROL_INJECTOR_TOKEN, useValue: config }],
    });
  }
}

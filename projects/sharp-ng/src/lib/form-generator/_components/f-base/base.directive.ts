import {Directive, HostBinding, inject, OnInit} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';
import {CONTROL_INJECTOR_TOKEN} from '../../_pipes/control-injector/control-injector-token';
import {ChangeConfigPropertyService} from '../../_services/change-config-property/change-config-property.service';
import {changeConfigProperty} from '../../_functons/change-config-property';

@Directive()
export class BaseDirective implements OnInit {
  private changeConfigPropertyService = inject(ChangeConfigPropertyService);
  protected parentFormGroup = inject(ControlContainer);
  protected config = inject(CONTROL_INJECTOR_TOKEN);

  get form() {
    if (this.parentFormGroup instanceof FormGroupDirective) {
      return this.parentFormGroup.form;
    } else {
      return this.parentFormGroup['_parent'].form.controls[
        this.parentFormGroup.name
      ];
    }
  }

  @HostBinding('style')
  get hostWidth() {
    return this.config?.hostStyle;
  }

  @HostBinding('class') get hostClass() {
    return this.config?.hostClass;
  }

  ngOnInit() {
    this.changeConfigPropertyService.change.subscribe((newConfig) => {
      changeConfigProperty(this.config, newConfig);
    });
  }
}

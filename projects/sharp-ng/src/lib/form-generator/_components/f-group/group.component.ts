import {Component, inject} from '@angular/core';
import {BaseDirective} from '../f-base/base.directive';
import {SetControlComponentService} from '../../_services/set-control-component.service';
import {FormGroupService} from './_services/form-group.service';
import {CommonModule} from "@angular/common";
import {ControlInjectorModule} from "../../_pipes/control-injector/control-injector.module";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  standalone:true,
  imports:[ CommonModule,
    ControlInjectorModule,
    ReactiveFormsModule,
   ]
})
export class GroupComponent extends BaseDirective {
  private formGroupService = inject(FormGroupService);
  setControlComponentService = inject(SetControlComponentService);
  protected button = {
    operation: () => {
      this.formGroupService.deleteFormGroup.next({
        key: 'delete',
        value: this.config.name,
      });
    },
    svgIcon: 'recycle-bin',
    hasSvgIcon: true,
  };
}

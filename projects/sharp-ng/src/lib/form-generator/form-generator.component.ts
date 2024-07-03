import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
  FormConfigInterface,
  FormControlConfigInterface,
} from './_models/form-generator.interface';
import { SetControlComponentService } from './_services/set-control-component.service';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {SelectModule} from "./_components/f-select/select.module";
import {SelectSearchModule} from "./_components/f-select-search/select-search.module";
import {PlaceholderModule} from "./_components/f-placeholder/placeholder.module";
import {CheckboxModule} from "./_components/f-checkbox/checkbox.module";
import {RadioModule} from "./_components/f-radio/radio.module";
import {SlideToggleModule} from "./_components/f-slide-toggle/slide-toggle.module";
import {MenuModule} from "./_components/f-menu/menu.module";
import {SearchInputModule} from "./_components/f-search-input/search-input.module";
import {ServerSearchInputModule} from "./_components/f-server-search-input/server-search-input.module";
import {InputNumberModule} from "./_components/f-input-number/input-number.module";
import {ControlInjectorModule} from "./_pipes/control-injector/control-injector.module";
import {GroupModule} from "./_components/f-group/group.module";
import {ValidationErrorsModule} from "./_components/validation-errors/validation-errors.module";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
  standalone:true,
  imports:[ CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    SelectModule,
    SelectSearchModule,
    PlaceholderModule,
    CheckboxModule,
    RadioModule,
    SlideToggleModule,
    MenuModule,
    SearchInputModule,
    ServerSearchInputModule,
    InputNumberModule,
    ControlInjectorModule,
    GroupModule,
    ValidationErrorsModule,]
})
export class FormGeneratorComponent implements AfterViewInit {
  constructor(
    protected setControlComponentService: SetControlComponentService,
  ) {}

  protected form: FormGroup;
  private _config: FormConfigInterface;
  @Input() set config(config: FormConfigInterface) {
    this._config = config;
    this.buildForm(config.controls);
    this.formReady.emit(this.form);
  }

  get config() {
    return this._config;
  }

  @Output() formReady = new EventEmitter<FormGroup<any>>();
  @Output() submitForm = new EventEmitter<any>();

  public buildForm(controls: FormConfigInterface['controls']): any {
    this.form = new FormGroup({});
    controls.forEach((control) => {
      this.buildControls(control.name, control, this.form);
    });
  }

  private buildControls(
    controlKey: string,
    config: FormControlConfigInterface,
    form: FormGroup,
  ) {
    if (config.controlType === 'f-group') {
      this.buildGroup(controlKey, config['controls'], form);
      return;
    }
    // const validators = resolveValidators(config);
    const validators = {};
    form.addControl(
      controlKey,
      new FormControl(
        { value: config.defaultValue, disabled: config.disabled },
        validators,
      ),
    );
  }

  private buildGroup(
    controlKey: string,
    controls: FormControlConfigInterface['controls'],
    parentFormGroup: FormGroup,
  ) {
    if (!controls) {
      return;
    }
    const nestedFormGroup = new FormGroup({});
    controls.forEach((config) =>
      this.buildControls(config.name, config, nestedFormGroup),
    );
    parentFormGroup.addControl(controlKey, nestedFormGroup);
  }

  protected onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  ngAfterViewInit() {}
}

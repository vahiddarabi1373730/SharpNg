import { Component, inject, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { VALIDATION_ERROR_MESSAGES } from './_tokens/validation-error-messages-token';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
  standalone:true,
  imports:[

  ]
})
export class ValidationErrorsComponent {
  @Input() errors: ValidationErrors | null;
  protected messages = inject(VALIDATION_ERROR_MESSAGES);
}

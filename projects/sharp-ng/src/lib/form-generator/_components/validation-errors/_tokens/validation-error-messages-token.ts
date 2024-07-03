import { InjectionToken } from '@angular/core';

export const errorMessages: { [key: string]: (arg?: any) => string } = {
  required: () => 'این فیلد اجباری است',
  maxlength: ({ requiredLength }) =>
    `   حداکثر کاراکتر${requiredLength} میباشد. `,
  minlength: ({ requiredLength }) =>
    `   حداقل کاراکتر${requiredLength} میباشد. `,
  numbersOnly: () => 'فقط عدد وارد کنید.',
};
export const VALIDATION_ERROR_MESSAGES = new InjectionToken('', {
  factory: () => errorMessages,
});

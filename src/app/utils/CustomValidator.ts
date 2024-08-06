import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const positiveNumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'number' || value <= 0) {
      return { positiveNumber: { value: 'Debe ser mayor a cero' } };
    }
    return null;
  };
};

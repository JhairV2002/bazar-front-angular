import { FormArray } from '@angular/forms';

export function validateBillDetailContent(
  control: FormArray
): { [key: string]: any } | null {
  const isValidDetailLines: boolean = control.controls.every((line) => {
    return line.getRawValue() >= 1 || line.getRawValue() != null;
  });
  if (!isValidDetailLines) {
    return { billError: 'Detalle de la factura no valido' };
  }

  return null;
}

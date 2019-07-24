import { FormGroup } from '@angular/forms';

export function mapByFormControl(formGroup: FormGroup, objToMap: object): void {
  for (const key in formGroup.controls) {
    if (formGroup.controls.hasOwnProperty(key)) {
      const control = formGroup.controls[key];
      if (objToMap[key]) {
        control.setValue(objToMap[key]);
      }
    }
  }
}

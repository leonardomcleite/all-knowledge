import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

export class FormControlModel extends FormControl {
  mask: any;

  constructor(
    formState ?: any,
    validatorOrOpts ?: ValidatorFn | ValidatorFn[] | AbstractControlOptions,
    asyncValidator ?: AsyncValidatorFn | AsyncValidatorFn[],
    mask?: any) {

    super(formState, validatorOrOpts, asyncValidator);
    this.mask = mask;
  }
}

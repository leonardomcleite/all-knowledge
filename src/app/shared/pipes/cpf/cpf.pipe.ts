import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  constructor() { }

  transform(value: any): string | null {
    if (!value) {
      return null;
    }

    let cpf: string = value.toString();
    cpf = `00000000000${cpf}`.substr(-11, 11);
    const cpfParts = cpf.match(/.{1,3}/g);
    return cpfParts[0] + '.' + cpfParts[1] + '.' + cpfParts[2] + '-' + cpfParts[3];
  }

}

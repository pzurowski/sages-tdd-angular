import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zero'
})
export class ZeroPipe implements PipeTransform {

  transform(value: any, zeroString = 'zero', nonZeroString = 'non-zero'): any {
    return value === 0 ? zeroString : nonZeroString;
  }

}

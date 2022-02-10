import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, targetUnits: string): string {
    if (!value) {
      return '';
    }

    let valueInfloat = parseFloat(value);

    switch (targetUnits) {
      case 'km':
        return (valueInfloat * 1.60934).toString();
      case 'm':
        return (valueInfloat * 1.60934 * 1000).toString();
      case 'cm':
        return (valueInfloat * 1.60934 * 1000 * 100).toString();
      default:
        throw new Error('Target unit not supported');
    }
  }

}

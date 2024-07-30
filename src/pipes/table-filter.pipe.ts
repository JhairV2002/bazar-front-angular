import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  standalone: true
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any[], filter: string, valueToFilter: string): any[] {
    if (filter) {
      return value.filter((item: any) => item[valueToFilter].toLowerCase().includes(filter.toLowerCase()));
    }
    return value;
  }

}

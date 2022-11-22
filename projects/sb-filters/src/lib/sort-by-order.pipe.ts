import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value?.sort((value1,value2) => 
    {
      return value1.index - value2.index; 
    });
  }
}
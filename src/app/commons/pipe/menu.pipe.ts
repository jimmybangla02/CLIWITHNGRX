import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

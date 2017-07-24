/**
 * Created by xacho on 09.07.17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtcam'
})

export class FilterCam implements PipeTransform {
  transform(value: string, args1: any, serachData: any, searchBy: any): any {
    if (searchBy === '$') {
      return value;
    }
    if (searchBy === 'camName') {
      if (serachData === '') {
        return value;
      }
      for (let i = 0; i < args1.length; ++i) {
        if (args1[i].camName === serachData) {
          return [
            args1[i]
          ];
        }
      }
      return [];
    }

    if (searchBy === 'location') {
      if (serachData === '') {
        return value;
      }
      for (let i = 0; i < args1.length; ++i) {
        if (args1[i].location === serachData) {
          return [
            args1[i]
          ];
        }
      }
      return [];
    }
  }
}

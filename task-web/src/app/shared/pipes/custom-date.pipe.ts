import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');
@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, time: boolean | 'extenso' = false, utc?: boolean): string | null {
    let date: string;
    if (time) {
      date = dayjs(value).format('DD/MM/YYYY HH:mm');
    } else {
      date = dayjs(value).format('DD/MM/YYYY');
    }

    if (!isNaN(dayjs(value).toDate().getTime())) return date;
    return '-';
  }
}

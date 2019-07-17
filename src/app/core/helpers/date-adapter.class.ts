import { NativeDateAdapter } from '@angular/material';
import moment from 'moment';

export class AppDateAdapter extends NativeDateAdapter {

  parse(value: any): any {
    // if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
    //   const str = value.split('/');
    //   const year = Number(str[2]);
    //   const month = Number(str[1]) - 1;
    //   const date = Number(str[0]);
    //   return moment(new Date(year, month, date)).format('YYYY-MM.DDD');
    // }
    // const timestamp = typeof value === 'number' ? value : Date.parse(value);
    // return isNaN(timestamp) ? null : moment( new Date(timestamp)).format('YYYY-MM.DDD');
    value = value ? value : moment().toDate();
    return moment(value).format('YYYY-MM-DD');
  }

  format(date: Date, displayFormat: string): string {
    // if (displayFormat === 'input') {
    //   const day = date.getDate();
    //   const month = date.getMonth() + 1;
    //   const year = date.getFullYear();
    //   return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
    // } else if (displayFormat === 'inputMonth') {
    //   const month = date.getMonth() + 1;
    //   const year = date.getFullYear();
    //   return this._to2digit(month) + '/' + year;
    // } else {
    //   return date.toDateString();
    // }
    const value = date ? moment(date).toDate() : moment().toDate();
    if (displayFormat === 'input') {
      return moment(value).format('DD/MM/YYYY');
    } else if (displayFormat === 'inputMonth') {
      return moment(value).format('MM/YYYY');
    } else {
      return moment(value).toDate().toDateString();
    }
  }

}

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: {
      month: 'short',
      year: 'numeric',
      day: 'numeric'
    }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'inputMonth',
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    },
  }
};

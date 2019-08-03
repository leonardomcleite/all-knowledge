import { MatPaginatorIntl } from '@angular/material';
import { InternationalizationService } from '../services/internationalization/internationalization.service';

let inter: InternationalizationService = null;

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 ${inter.instant('label.de')} ${length}`; }
  
  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} ${inter.instant('label.de')} ${length}`;
}



export function getDutchPaginatorIntl(internationalizationService: InternationalizationService) {
  inter = internationalizationService;
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.getRangeLabel = dutchRangeLabel;
  
  return paginatorIntl;
}
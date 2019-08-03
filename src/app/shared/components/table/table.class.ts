import { environment } from '@all-knowledge/env/environment';
import { MatTableDataSource } from '@angular/material/table';

export class TableClassComponent {
  
  displayedColumns: Array<any>;
  totalElemnts: number = 0;
  defaultTableSize: number = environment.defaultTableSize;
  dataSource: MatTableDataSource<any>;

}

import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'ak-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  filter: FormControl = new FormControl(null);
  manualPage: FormControl = new FormControl(1);

  @Input() displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  @Input() totalElemnts: number = 20;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // manualPage = null;
  dataSource: MatTableDataSource<UserData>;
  typeFieldEnum = TypeFieldEnum;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // Create 100 users
    const users = Array.from({length: this.totalElemnts}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.buildFormGroup();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      filter: this.filter,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateManualPage() {
    this.paginator.pageIndex = this.manualPage.value - 1;
  }

  clearManualPage() {
    this.manualPage = null;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

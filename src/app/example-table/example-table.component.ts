import { environment } from '@all-knowledge/env/environment';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'ak-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit {

  displayedColumnsField: Array<any>;
  displayedColumns: Array<any>;
  totalElements: number = 0;
  defaultTableSize: number = environment.defaultTableSize;
  dataSource: MatTableDataSource<any>;

  constructor() {
    // super();
  }

  ngOnInit() {
    this.totalElements = 20;
    this.displayedColumns = [
      {name: 'label.id', field: 'id'},
      {name: 'label.nome', field: 'name'},
      {name: 'label.progresso', field: 'progress'},
      {name: 'label.cor', field: 'color'}
    ];
    const users = Array.from({length: this.totalElements}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
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
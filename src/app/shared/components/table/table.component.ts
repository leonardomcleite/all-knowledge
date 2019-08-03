import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { InternationalizationService } from '@all-knowledge/core/services/internationalization/internationalization.service';
import { environment } from '@all-knowledge/env/environment';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ak-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  @Input() totalElements: number = 0;
  @Input() defaultTableSize: number = environment.defaultTableSize;
  @Input() set dataSource(value) {
    this.dataSourceChange = value ? value : new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  get dataSource() { return this.dataSourceChange; } private dataSourceChange: MatTableDataSource<any>;

  displayedColumnsField: Array<any>;
  @Input() set displayedColumns(value) {
    this.displayedColumnsChange = value;
    if (value) {
      this.displayedColumnsField = value.map((item) => item.field);
    }
  } 
  get displayedColumns() { return this.displayedColumnsChange; } private displayedColumnsChange: Array<any>;
  
  filter: FormControl = new FormControl(null);
  typeFieldEnum = TypeFieldEnum;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private InternationalizationService: InternationalizationService
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.updateLabelsPaginator();
    this.InternationalizationService.onLangChange.subscribe(() => {
      this.updateLabelsPaginator();
    });
  }

  updateLabelsPaginator() {
    this.paginator._intl.itemsPerPageLabel = this.InternationalizationService.instant('label.itemsPorPagina');
    this.paginator._intl.previousPageLabel = this.InternationalizationService.instant('label.paginaAnterior');
    this.paginator._intl.nextPageLabel = this.InternationalizationService.instant('label.proximaPagina');
    this.paginator._intl.firstPageLabel = this.InternationalizationService.instant('label.primeiraPagina');
    this.paginator._intl.lastPageLabel = this.InternationalizationService.instant('label.ultimaPagina');
    this.paginator._intl.changes.next();
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

}

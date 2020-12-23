import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-integra',
  templateUrl: './integra.component.html',
  styleUrls: ['./integra.component.scss']
})
export class IntegraComponent implements OnInit {
  title = 'Integrações';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  displayedColumns = ['select', 'tool_nome', 'tool_status', 'tool_obs'];
  dataSource = new MatTableDataSource<Ferramentas>(ELEMENT_DATA);
  selection = new SelectionModel<Ferramentas>(true, []);

  isShow = false;
  toggleDisplay() {
    this.isShow = true;
  }
  toggleBack() {
    this.isShow = false;
  }

  anySelected = true;
  changeCheck(event) {
    if (this.selection.selected.length > 0) {
      this.anySelected = false;
    }
    else {
      this.anySelected = true;
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Ferramentas): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.tool_nome + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

export interface Ferramentas {
  tool_nome: string;
  tool_status: string;
  tool_obs: string;
}

const ELEMENT_DATA: Ferramentas[] = [
  { tool_nome: 'Google Drive', tool_status: 'Não integrado', tool_obs: 'Nenhuma' },
  // { tool_nome: 'Instituto Federal de Pernambuco', tool_status: '02.403.237/0005-28', tool_obs: 'Nenhuma' }
];
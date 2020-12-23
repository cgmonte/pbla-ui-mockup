import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-estudantes-profe',
  templateUrl: './estudantes-profe.component.html',
  styleUrls: ['./estudantes-profe.component.scss']
})
export class EstudantesProfeComponent implements OnInit {
  title = 'Estudantes';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  displayedColumns = ['select', 'estudante_nome', 'estudante_email', 'estudante_obs'];
  dataSource = new MatTableDataSource<EstudantesFake>(ELEMENT_DATA);
  selection = new SelectionModel<EstudantesFake>(true, []);
  
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
  checkboxLabel(row?: EstudantesFake): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.estudante_nome + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

export interface EstudantesFake {
  estudante_nome: string;
  estudante_cpf: string;
  estudante_email: string;
  estudante_obs: string;
}

const ELEMENT_DATA: EstudantesFake[] = [
  { estudante_nome: 'André Araujo', estudante_cpf: '092.721.328-90', estudante_email: 'andre@cesa.school', estudante_obs: 'Nenhuma' }
];
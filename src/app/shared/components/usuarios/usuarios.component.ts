import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  // tittle é usado no template
  title = 'Usuários';

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Seleção de tipo de usuário. Regra para proibir que estudantes tenham outro papel.
  roles = new FormControl();
  roleList: string[] = ['Administrador', 'Coordenador', 'Professor', 'Estudante'];
  selected_user_roles: string[] = [];
  userFieldIsShow = false;
  limitSelection() {
    if (this.selected_user_roles.includes('est') == true) {
      this.selected_user_roles = ['est'];
      // Mostrar campo "Curso" caso usuário seja do tipo estudante
      this.userFieldIsShow = true;
    }
    else {
      this.userFieldIsShow = false;
    }
  }


  // Criação de objetos relacionados aos dados da tabelas
  displayedColumns = ['select', 'user_name', 'user_role', 'curso_nivel', 'curso_nome', 'user_mail', 'user_obs'];
  dataSource = new MatTableDataSource<FakeData>(ELEMENT_DATA);
  selection = new SelectionModel<FakeData>(true, []);

  // formIsShow é inicializado falso, mas vai ser alterado pelos toggles
  formIsShow = false;
  toggleDisplay() {
    this.formIsShow = true;
  }
  toggleBack() {
    this.formIsShow = false;
  }

  // função para checar se alguma checkbox está selecionada. Usada para mostrar ou não botões como o de editar e excluir.
  anySelected = true;
  changeCheck(event) {
    if (this.selection.selected.length > 0) {
      this.anySelected = false;
    }
    else {
      this.anySelected = true;
    }
  }

  // Paginador e ordenador da tabela
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Filtro
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
  checkboxLabel(row?: FakeData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_name + 1}`;
  }

  myControl = new FormControl();
  options: string[] = [
    'Graduação em Ciência da computação',
    'Graduação em Design',
    'Mestrado profissional em Design',
    'Mestrado profissional em Engenharia de software'
  ];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

export interface FakeData {
  user_name: string;
  user_role: string;
  curso_nivel: string;
  curso_nome: string;
  user_mail: string;
  user_obs: string;
}

const ELEMENT_DATA: FakeData[] = [
  { user_name: 'Antônio Campos', user_role: 'Estudante', curso_nivel: 'Mestrado Profissional', curso_nome: 'Engenharia de Software', user_mail: 'antonio@cesar.school', user_obs: 'Nenhuma' }
];
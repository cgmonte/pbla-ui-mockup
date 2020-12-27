import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent implements OnInit {
  // tittle é usado no template
  title = 'Disciplinas';

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Criação de objetos relacionados aos dados e tabelas
  displayedColumns = ['select', 'disc_nome', 'curso_nivel', 'curso_nome', 'disc_obs'];
  dataSource = new MatTableDataSource<FakeData>(ELEMENT_DATA);
  selection = new SelectionModel<FakeData>(true, []);

  // isShow é inicializado falso, mas vai ser alterado pelos toggles
  isShow = false;
  toggleDisplay() {
    this.isShow = true;
  }
  toggleBack() {
    this.isShow = false;
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.disc_nome + 1}`;
  }
  constructor() { }

  ngOnInit(): void {
  }
}

export interface FakeData {
  disc_nome: string;
  curso_nivel: string;
  curso_nome: string;
  disc_obs: string;
}

const ELEMENT_DATA: FakeData[] = [
  { disc_nome: "Processos de software", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Requisitos e interfaces", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Gestão de projetos", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Verificação e validação", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Arquitetura de software", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Tópicos de construção SW", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Interoperabilidade", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" },
  { disc_nome: "Metodologia científica", curso_nivel: 'Mestrado Profissional', curso_nome: "Engenharia de software", disc_obs: "Nenhuma" }
];
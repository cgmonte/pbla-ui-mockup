import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {
  // tittle é usado no template
  title = 'Turmas';

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Criação de objetos relacionados aos dados e tabelas
  displayedColumns = ['select', 'disc_nome', 'turma_semestre', 'curso_nome', 'turma_qte_estudantes', 'turma_obs'];
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

  myControl = new FormControl();
  options: string[] = [
    'Graduação em Ciência da computação',
    'Graduação em Design',
    'Mestrado profissional em Design',
    'Mestrado profissional em Engenharia de software'
  ];
  filteredOptions: Observable<string[]>;

  disciplinasControl = new FormControl();
  options_disciplinas: string[] = [
    'Processos de software',
    'Requisitos e interfaces',
    'Gestão de projetos',
    'Verificação e validação',
    'Arquitetura de software',
    'Tópicos de construção SW',
    'Interoperabilidade',
    'Metodologia científica'
  ];
  filteredDisciplinasOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.filteredDisciplinasOptions = this.disciplinasControl.valueChanges
      .pipe(
        startWith(''),
        map(dsic_value => this._disc_filter(dsic_value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _disc_filter(dsic_value: string): string[] {
    const disciplinafilterValue = dsic_value.toLowerCase();

    return this.options_disciplinas.filter(options_disciplinas => options_disciplinas.toLowerCase().includes(disciplinafilterValue));
  }
}

export interface FakeData {
  disc_nome: string;
  turma_semestre: string;
  curso_nome: string;
  turma_qte_estudantes: string;
  turma_obs: string;
}

const ELEMENT_DATA: FakeData[] = [
  { disc_nome: "Processos de software", turma_semestre: '2020.2', curso_nome: "Engenharia de software", turma_qte_estudantes: '20', turma_obs: "Nenhuma" }

];
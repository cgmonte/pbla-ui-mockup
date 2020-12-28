import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {
  // tittle é usado no template
  title = 'Equipes';

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Criação de objetos relacionados aos dados e tabelas 
  displayedColumns = ['select', 'equipe_numero', 'equipe_nome', 'equipe_turmas', 'equipe_integrantes', 'equipe_obs'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.equipe_numero + 1}`;
  }
  myControl = new FormControl();
  options: string[] = [
    'Graduação em Ciência da computação - CESAR School',
    'Graduação em Design - CESAR School',
    'Mestrado profissional em Design - CESAR School',
    'Mestrado profissional em Engenharia de software - CESAR School'
  ];
  filteredOptions: Observable<string[]>;

  disciplinasControl = new FormControl();
  options_disciplinas: string[] = [
    'Processos de software 2020.2',
    'Requisitos e interfaces 2020.2',
    'Gestão de projetos 2020.2',
    'Verificação e validação 2020.2',
    'Arquitetura de software 2020.2',
    'Tópicos de construção SW 2020.2',
    'Interoperabilidade 2020.2',
    'Metodologia científica 2020.2'
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
  equipe_numero: number;
  equipe_nome: string;
  equipe_turmas: string;
  equipe_integrantes: number;
  equipe_obs: string;
}

const ELEMENT_DATA: FakeData[] = [
  { equipe_numero: 1, equipe_nome: 'Genesys', equipe_turmas: "Processos de software 2020.2", equipe_integrantes: 6, equipe_obs: "Nenhuma" },
];
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vis-estudante',
  templateUrl: './vis-estudante.component.html',
  styleUrls: ['./vis-estudante.component.scss']
})
export class VisEstudanteComponent implements OnInit {
  title = 'Patrícia Alencar';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  // displayedColumns = ['select', 'inst_nome', 'inst_cnpj', 'inst_obs'];
  constructor() { }

  ngOnInit(): void {
  }

}

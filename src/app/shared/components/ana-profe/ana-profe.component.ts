import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana-profe',
  templateUrl: './ana-profe.component.html',
  styleUrls: ['./ana-profe.component.scss']
})
export class AnaProfeComponent implements OnInit {
  title = 'Navegação Analytics Professor';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {
  title = 'Administração';
  selected = 'inst';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }

}


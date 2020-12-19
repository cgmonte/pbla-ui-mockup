import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {
  title = 'PBL Analytics - Administração';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // 👈 notice this
  constructor() { }

  ngOnInit(): void {
  }

}

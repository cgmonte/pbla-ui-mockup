import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-est',
  templateUrl: './config-est.component.html',
  styleUrls: ['./config-est.component.scss']
})
export class ConfigEstComponent implements OnInit {
  title = 'Configuração Estudante';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst',
  templateUrl: './inst.component.html',
  styleUrls: ['./inst.component.scss']
})
export class InstComponent implements OnInit {
  title = 'PBL Analytics - Insituições';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }
}

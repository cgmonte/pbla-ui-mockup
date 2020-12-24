import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss']
})
export class VisComponent implements OnInit {
  title = 'Visualização';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}


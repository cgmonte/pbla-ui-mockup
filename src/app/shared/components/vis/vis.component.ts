import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss']
})
export class VisComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  title = 'Visualização';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}


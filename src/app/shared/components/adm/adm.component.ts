import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {
  title = 'Administração';
  selected = 'inst';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  // router: Router;

  constructor(router: Router) {
    // this.router.navigateByUrl('/adm/(sidenav-content-outlet:inst)');
  }

  ngOnInit(): void {
    // this.router.navigateByUrl('/inbox/33/messages/44')
  }

}


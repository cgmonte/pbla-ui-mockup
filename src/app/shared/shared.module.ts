import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
import { RouterModule} from "@angular/router";
import { InstComponent } from './components/inst/inst.component';

@NgModule({
  declarations: [LoginComponent, AdmComponent, SidenavComponent, InstComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, AdmComponent, SidenavComponent, InstComponent], // 👈 added
})
export class SharedModule { }
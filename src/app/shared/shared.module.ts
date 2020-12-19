import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
// import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
@NgModule({
  declarations: [LoginComponent, AdmComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoginComponent, AdmComponent], // 👈 added
})
export class SharedModule {}
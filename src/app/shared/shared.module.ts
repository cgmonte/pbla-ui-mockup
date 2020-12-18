import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [SidenavComponent, LoginComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidenavComponent, LoginComponent], // 👈 added
})
export class SharedModule {}
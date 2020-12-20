import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
import { RouterModule} from "@angular/router";
// import { AppRoutingModule } from '../app-routing.module';


// const appRoutes: Routes = [
//   // { path: "", component: LoginComponent },
//   // { path: "login", component: LoginComponent },
//   { path: "/adm/nav", component: SidenavComponent },
//   // { path: "adm", component: AdmComponent }
// ]

@NgModule({
  declarations: [LoginComponent, AdmComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, AdmComponent, SidenavComponent], // 👈 added
})
export class SharedModule { }
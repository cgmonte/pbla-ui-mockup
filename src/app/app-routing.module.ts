import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
// import { AdmComponent } from './shared/components/adm/adm.component';

const routes: Routes = [{
  path: 'adm/nav',
  component: SidenavComponent,
  outlet: 'sidenav-content-outlet'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

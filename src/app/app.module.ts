import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from './shared/shared.module'; // 👈 <-- Added
import { LoginComponent } from './shared/components/login/login.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { AdmComponent } from './shared/components/adm/adm.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "nav", component: SidenavComponent },
  { path: "adm", component: AdmComponent, children: [{ path: "nav", component: SidenavComponent, outlet: "sidenav-content-outlet" }] }

]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

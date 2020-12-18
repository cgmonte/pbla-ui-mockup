import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from './shared/shared.module'; // 👈 <-- Added
import { LoginComponent } from './shared/components/login/login.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "nav", component: SidenavComponent }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule, // 👈 <-- Added
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

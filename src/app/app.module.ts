import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from './shared/shared.module'; // 👈 <-- Added
import { LoginComponent } from './shared/components/login/login.component';
// import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { AdmComponent } from './shared/components/adm/adm.component';
import { InstComponent } from './shared/components/inst/inst.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { DisciplinasComponent } from './shared/components/disciplinas/disciplinas.component';
import { TurmasComponent } from './shared/components/turmas/turmas.component';
import { EquipesComponent } from './shared/components/equipes/equipes.component';
import { UsuariosComponent } from './shared/components/usuarios/usuarios.component';
import { ConfigEstComponent } from './shared/components/config-est/config-est.component';
import { IntegraComponent } from './shared/components/integra/integra.component';
import { AnaProfeComponent } from './shared/components/ana-profe/ana-profe.component';
import { EstudantesProfeComponent } from './shared/components/estudantes-profe/estudantes-profe.component';

import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "inst", component: InstComponent },
  { path: "adm", component: AdmComponent, children: [{ path: "inst", component: InstComponent, outlet: "sidenav-content-outlet" }] },
  { path: "adm", component: AdmComponent, children: [{ path: "cursos", component: CursosComponent, outlet: "sidenav-content-outlet" }] },
  { path: "adm", component: AdmComponent, children: [{ path: "disciplinas", component: DisciplinasComponent, outlet: "sidenav-content-outlet" }] },
  { path: "adm", component: AdmComponent, children: [{ path: "turmas", component: TurmasComponent, outlet: "sidenav-content-outlet" }] },
  { path: "adm", component: AdmComponent, children: [{ path: "equipes", component: EquipesComponent, outlet: "sidenav-content-outlet" }] },
  { path: "adm", component: AdmComponent, children: [{ path: "usuarios", component: UsuariosComponent, outlet: "sidenav-content-outlet" }] },
  { path: "config-est", component: ConfigEstComponent, children: [{ path: "integra", component: IntegraComponent, outlet: "sidenav-content-outlet" }] },
  { path: "ana-profe", component: AnaProfeComponent, children: [{ path: "estudantes", component: EstudantesProfeComponent, outlet: "sidenav-content-outlet" }] }

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

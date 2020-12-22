import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
import { RouterModule} from "@angular/router";
import { InstComponent } from './components/inst/inst.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { TurmasComponent } from './components/turmas/turmas.component';
import { EquipesComponent } from './components/equipes/equipes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [LoginComponent, AdmComponent, SidenavComponent, InstComponent, CursosComponent, DisciplinasComponent, TurmasComponent, EquipesComponent, UsuariosComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, AdmComponent, SidenavComponent, InstComponent, CursosComponent, DisciplinasComponent], // 👈 added
})
export class SharedModule { }
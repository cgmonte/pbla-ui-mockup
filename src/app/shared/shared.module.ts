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
import { ConfigEstComponent } from './components/config-est/config-est.component';
import { IntegraComponent } from './components/integra/integra.component';
import { AnaProfeComponent } from './components/ana-profe/ana-profe.component';
import { EstudantesProfeComponent } from './components/estudantes-profe/estudantes-profe.component';
import { VisComponent } from './components/vis/vis.component';
import { VisEstudanteComponent } from './components/vis-estudante/vis-estudante.component';

@NgModule({
  declarations: [LoginComponent, AdmComponent, SidenavComponent, InstComponent, CursosComponent, DisciplinasComponent, TurmasComponent, EquipesComponent, UsuariosComponent, ConfigEstComponent, IntegraComponent, AnaProfeComponent, EstudantesProfeComponent, VisComponent, VisEstudanteComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, AdmComponent, SidenavComponent, InstComponent, CursosComponent, DisciplinasComponent, AnaProfeComponent, EstudantesProfeComponent], // 👈 added
})
export class SharedModule { }
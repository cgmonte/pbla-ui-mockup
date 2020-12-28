import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from './shared/shared.module';
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
import { VisComponent } from './shared/components/vis/vis.component';
import { VisEstudanteComponent } from './shared/components/vis-estudante/vis-estudante.component';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
// import { A11yModule } from '@angular/cdk/a11y';
// import { ClipboardModule } from '@angular/cdk/clipboard';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { PortalModule } from '@angular/cdk/portal';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { CdkStepperModule } from '@angular/cdk/stepper';
// import { CdkTableModule } from '@angular/cdk/table';
// import { CdkTreeModule } from '@angular/cdk/tree';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTreeModule } from '@angular/material/tree';
// import { OverlayModule } from '@angular/cdk/overlay';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


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
  { path: "ana-profe", component: AnaProfeComponent, children: [{ path: "estudantes", component: EstudantesProfeComponent, outlet: "sidenav-content-outlet" }] },
  { path: "vis", component: VisComponent, children: [{ path: "estudante", component: VisEstudanteComponent, outlet: "sidenav-content-outlet" }] }

]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // A11yModule,
    // ClipboardModule,
    // DragDropModule,
    // PortalModule,
    // ScrollingModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    // MatAutocompleteModule,
    // MatBottomSheetModule,
    // MatButtonToggleModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatGridListModule,
    // MatNativeDateModule, MatRippleModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSnackBarModule,
    // MatTabsModule,
    // MatTreeModule,
    // OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
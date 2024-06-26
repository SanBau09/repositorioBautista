import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DetalleComponent } from './clientes/detalle/detalle.component';

import { ClienteService } from './clientes/cliente.service';
import { GaleriaService } from './galeria/galeria.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';

import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './usuarios/login.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormIlustracionComponent } from './galeria/form-ilustracion/form-ilustracion.component';




registerLocaleData(localeES, 'es');

const ROUTES: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/page/:page', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'galeria/form-ilustracion', component: FormIlustracionComponent},
  {path: 'galeria/categorias', component: FormIlustracionComponent},
  {path: 'galeria/ilustraciones', component: GaleriaComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent,
    AboutMeComponent,
    GaleriaComponent,
    FormIlustracionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule
  ],
  providers: [ClienteService, GaleriaService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

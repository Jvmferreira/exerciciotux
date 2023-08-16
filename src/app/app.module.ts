import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaginaclientesComponent } from './paginaclientes/paginaclientes.component';
import { FormulariocadastroComponent } from './formulariocadastro/formulariocadastro.component';
import { NegritoComponent } from './negrito/negrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaginaclientesComponent,
    FormulariocadastroComponent,
    NegritoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariocadastroComponent } from './formulariocadastro/formulariocadastro.component';
import { PaginaclientesComponent } from './paginaclientes/paginaclientes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'formulariocadastro',component:FormulariocadastroComponent},
  {path:'paginaclientes', component:PaginaclientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

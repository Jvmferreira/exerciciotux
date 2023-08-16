import { Component } from '@angular/core';

@Component({
  selector: 'app-paginaclientes',
  templateUrl: './paginaclientes.component.html',
  styleUrls: ['./paginaclientes.component.css']
})
export class PaginaclientesComponent {
    nomeBotao ="Acima de 60 anos";
    msg = '';
    control = true;
   
    clientes = [
      {id:1,nome:'João Victor',sobrenome:'Martins',cpf:'18766081700',idade:20,endereco:'Rua Nossa Senhora das Merceis nº116'},
      {id:2,nome:'Ricardo',sobrenome:'Santos',cpf:'123456789',idade:80,endereco:'Rua Jurupira nº110'},
      {id:3,nome:'Maria',sobrenome:'Santos',cpf:'432143567',idade:70,endereco:'Rua Guapimirim nº 52'},
      {id:4,nome:'Marta',sobrenome:'Silva',cpf:'123478901',idade:75,endereco:'Rua Tancredo neves nº115'}
    ]


    maisSessenta(){
      this.control ? this.nomeBotao = "Exibir todos" : this.nomeBotao = "Acima de 60 anos";  
      return this.control = !this.control;
    }
}

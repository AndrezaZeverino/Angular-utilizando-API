import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img: string = "";
  nome: string = "";
  sobrenome: string = "";
  telefone: string= "";

  constructor(private http:HttpClient) { }

  ngOnInit(){
  this.carregarImagem()
  this.carregarNome()
  this.carregarTelefone()
  }

  carregarImagem(){
  this.http.get<any>('https://randomuser.me/api/').subscribe(result => {
    this.img = result.results[0].picture.large;
  })
  }

  carregarNome(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(result => {
      this.nome = result.results[0].name.first;
      this.sobrenome = result.results[0].name.last;
  })
  }

  carregarTelefone(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(result => {
      this.telefone = result.results[0].phone;
  })
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valor: String = "Valor qualquer";
  email = "test@gmail.com";
  idade = 12;

  valorAtual = "";
  valorSalvo = "";

  nome = "abc";
  pessoa = {
    nome: "nome aqui",
    idade: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onKey(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }

  botaoClicado() {
    alert('Botão foi clicado!')
  }

}

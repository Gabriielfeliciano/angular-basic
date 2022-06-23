import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ["Angular", ".Net", "JavaScript"];

  mostrarCursos = true;

  tarefa: any = {
    desc: 'Descrição da tarefa',
    // responsavel: null,
    responsavel: {
      nome: 'Gabriel'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}

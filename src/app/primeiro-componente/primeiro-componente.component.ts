import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css'],
})
export class PrimeiroComponenteComponent implements OnInit {

  meutitulo = 'Exibindo dados através de uma variavel !!!';
  texto1 = 'Olá , tudo bem ? ';
  texto2 = 'Como vai ?';
  cliente = { id: 1, nome: 'Fulano' };

  clientes = [
    { id: 1, nome: 'Fulano', ativo: true },
    { id: 2, nome: 'Beltrano', ativo: false},
    { id: 3, nome: 'Ciclano', ativo: true},
  ];

  constructor() {}

  ngOnInit(): void {}
  geraTexto() {
    return 'Um texto qualquer';
  }
}

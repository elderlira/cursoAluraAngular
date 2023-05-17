import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../interface/pensamento';
import { PensamentoService } from '../service/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1;
  haMaisMensagem: boolean = true
  filtro: string = ''
  favorito: boolean = false
  lFavorito: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
    ) {}

  ngOnInit(): void { 
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((lista)=> {
      this.listaPensamentos = lista;
    })
  }

  verificarNovasMensagens() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe(lista => {
      this.listaPensamentos.push(...lista)
      
      if(!lista.length) {
        this.haMaisMensagem = false
      }

    })
  }

  pesquisar() {
    let paginaAtual = 1
    this.service.listar(paginaAtual, this.filtro,this.favorito ).subscribe(lista => {
      this.listaPensamentos = lista
    })
  }

  meusFavoritos() {
    this.titulo = 'Meus Favoritos'
    let paginaAtual = 1
    this.favorito = true
    this.haMaisMensagem = true
    this.service.listar(paginaAtual, this.filtro, this.favorito).subscribe(lista => {
      this.listaPensamentos = lista
      this.lFavorito = lista
    })
  }

  atualizarComponente() {
    this.favorito = false
    this.router.navigate([this.router.url])
  }
}

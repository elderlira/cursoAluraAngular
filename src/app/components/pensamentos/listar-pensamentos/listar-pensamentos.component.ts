import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../interface/pensamento';
import { PensamentoService } from '../service/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1;
  haMaisMensagem: boolean = true

  constructor(
    private service: PensamentoService
    ) {}

  ngOnInit(): void { 
    this.service.listar(this.paginaAtual).subscribe((lista)=> {
      this.listaPensamentos = lista;
    })
  }

  verificarNovasMensagens() {
    this.service.listar(++this.paginaAtual).subscribe(lista => {
      this.listaPensamentos.push(...lista)
      
      if(!lista.length) {
        this.haMaisMensagem = false
      }

    })
    
    
  }
}

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

  constructor(private service: PensamentoService) {


  }

  ngOnInit(): void { 
    this.service.listar().subscribe((lista)=> {
      this.listaPensamentos = lista;
    })
  }

}

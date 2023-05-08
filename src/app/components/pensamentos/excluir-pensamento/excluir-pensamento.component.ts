import { Component } from '@angular/core';
import { PensamentoService } from '../service/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../interface/pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

constructor(
  private service: PensamentoService,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((p) => {
      this.pensamento = p
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.service.retornar()
      })
    }
  }

  cancelar() {
    this.service.retornar()
  }
}

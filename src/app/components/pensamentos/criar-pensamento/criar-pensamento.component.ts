import { Pensamento } from './../interface/pensamento';
import { Component } from '@angular/core';
import { PensamentoService } from '../service/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento :Pensamento =  {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id')
      if(!id) {
        return
      }
      this.service.buscarPorId(parseInt(id!)).subscribe((p)=> {
        this.pensamento = p
      })
    }

  criarPensamento() {
    alert('Pensamento registrado')
    this.service.criarPensamento(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listarPensamento'])
    })
  }

  atualizar() {
    if(this.pensamento.id) {
      this.service.atualizarPensamento(this.pensamento.id, this.pensamento).subscribe(()=> {
        this.service.retornar()
      })
    }
  }

  cancelarPensamento(): void {
    window.history.go(-1)
  }
}

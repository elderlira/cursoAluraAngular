import { Component } from '@angular/core';
import { PensamentoService } from '../service/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) {}

  criarPensamento() {
    alert('Pensamento registrado')
    this.service.criarPensamento(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(): void {
    window.history.go(-1)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }

  criarPensamento() {
    alert('Pensamento registrado')
  }

  cancelarPensamento(): void {
    window.history.go(-1)
  }
}

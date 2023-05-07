import { Component, Input } from '@angular/core';
import { Pensamento } from '../interface/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Titulo do card',
    autoria: 'Autor do card',
    modelo: 'modelo3'
  }

  selecionandoClassAutomaticamente(): string {
    if(this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return ' pensamento-p'
  }

}

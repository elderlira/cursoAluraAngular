import { Component, Input } from '@angular/core';
import { Pensamento } from '../interface/pensamento';
import { PensamentoService } from '../service/pensamento.service';

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
    modelo: 'modelo3',
    favorito: false
  }
  @Input() listaFavorita: Pensamento[] = []

  constructor(
    private service: PensamentoService
  ) {}

  selecionandoClassAutomaticamente(): string {
    if(this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return ' pensamento-p'
  }

  verificarFavorito(): string {
    if(!this.pensamento.favorito) {
      return 'inativo'
    }
    return 'ativo'
  }

  alternarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe(()=> {
      this.listaFavorita.splice(this.listaFavorita.indexOf(this.pensamento), 1)
    })
  }

}

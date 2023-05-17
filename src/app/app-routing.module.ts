import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomReuseStrategy } from './custom-reuse-strategy';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent,
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: 'pensamento/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamento/editarPensamento/:id',
    component: CriarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
})
export class AppRoutingModule { }

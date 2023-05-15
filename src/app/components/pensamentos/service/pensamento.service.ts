import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from '../interface/pensamento';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

private readonly API = 'http://localhost:3000/pensamento'

  constructor(
    private http: HttpClient,
    private router: Router,
    ) {}

  
  listar(paginaAtual: number, filtro: string): Observable<Pensamento[]> {
    let limit: number = 2
    let params = new HttpParams()
      .set("q", filtro)

    if(!filtro) {
      let params = new HttpParams()
        .set("_page", paginaAtual)
        .set("_limit", limit)
      return this.http.get<Pensamento[]>(this.API, { params })
    }  

    return this.http.get<Pensamento[]>(this.API, { params })

  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  buscarPorId(id: number) {
    return this.http.get<Pensamento>(`${this.API}/${id}`)
  }

  excluirPensamento(id: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.API}/${id}`)
  }

  atualizarPensamento(id: number, pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.API}/${id}`, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.atualizarPensamento(pensamento.id!, pensamento)

  }

  retornar(): void {
    this.router.navigate(['/listarPensamento'])
  }

}

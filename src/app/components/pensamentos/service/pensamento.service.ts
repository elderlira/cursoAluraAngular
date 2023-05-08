import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
  
  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  buscarPorId(id: number) {
    return this.http.get<Pensamento>(`${this.API}/${id}`)
  }

  excluirPensamento(id: number) {
    return this.http.delete<Pensamento>(`${this.API}/${id}`)
  }

  retornar(): void {
    this.router.navigate(['/listarPensamento'])
  }
}

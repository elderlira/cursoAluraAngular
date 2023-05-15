import { Pensamento } from './../interface/pensamento';
import { Component } from '@angular/core';
import { PensamentoService } from '../service/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from './newValidator';

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
    modelo: 'modelo3',
    favorito: false
  }

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.route.snapshot.paramMap.get('id')],
      conteudo: ['', [Validators.required]],
      autoria: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        Validators.maxLength(6),
        lowerCaseValidator
      ])],
      modelo: ['', Validators.required],
      favorito: [false]
    }) 
      const id = this.route.snapshot.paramMap.get('id')
      if(!id) {
        return
      }

      this.service.buscarPorId(parseInt(id!)).subscribe((p)=> {
        this.pensamento = p
        this.formulario = this.formBuilder.group({
          id: [this.route.snapshot.paramMap.get('id')],
          conteudo: [p.conteudo, [Validators.required]],
          autoria: [p.autoria, Validators.compose([
            Validators.minLength(3),
            Validators.required,
            Validators.maxLength(6),
            lowerCaseValidator
          ])],
          modelo: [p.modelo, Validators.required]
          
        })
      })

    }

  criarPensamento() {
    if(this.formulario.valid) {
      alert('Pensamento registrado')
      this.service.criarPensamento(this.formulario.value).subscribe(()=> {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  atualizar() {
    if(this.formulario.value.id) {
      this.service.atualizarPensamento(this.formulario.value.id, this.formulario.value).subscribe(()=> {
        this.service.retornar()
      })
    }
  }

  cancelarPensamento(): void {
    window.history.go(-1)
  }
}

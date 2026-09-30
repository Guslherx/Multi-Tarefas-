import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from '../utils/validacoes'; 

@Component({
  selector: 'app-home',
  templateUrl: 'principal.page.html',
  styleUrls: ['principal.page.scss'],
})
export class PrincipalPage {
  public multiForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.multiForm = this.formBuilder.group({
      etapaUm: this.formBuilder.group({
        nome: ['', ],
        sobrenome: ['', ],
        cpf: ['', ],
        genero: ['',  ],
        dataNascimento: [new Date().toJSON(), ],
        email: ['', ],
        senha: ['', ],
        senhaConfirm: ['', ],
      }),
      etapaDois: this.formBuilder.group({
        rua: ['', ],
        numero: ['0', ],
        complemento: ['', ],
        bairro: ['', ],
        cep: ['', ],
        cidade: ['', ],
        uf: ['', ],
      }),
      etapaTres: this.formBuilder.group({
        curso: ['', ],
        nivel: ['', ],
        profissao: ['', ],
        tempoExperiencia: ['', ]
      })
    });
  }

  public getFormEtapaUm(): FormGroup {
    return this.multiForm.get('etapaUm') as FormGroup;
  }

  public getFormEtapaDois(): FormGroup {
    return this.multiForm.get('etapaDois') as FormGroup;
  }

  public getFormEtapaTres(): FormGroup {
    return this.multiForm.get('etapaTres') as FormGroup;
  }
}

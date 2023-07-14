import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  colaborador: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.colaborador = this.fb.group({
      nome: '',
      email: '',
      senha: '',
      nascimento: '',
      setor: '',
    })
  }
}



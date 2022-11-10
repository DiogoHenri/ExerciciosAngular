import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  ra: string;
  nome: string;
  email: string;
  celular: string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  this.ra = this.route.snapshot.params['ra']
  this.nome = this.route.snapshot.params['nome']
  this.email = this.route.snapshot.params['email']
  this.celular = this.route.snapshot.params['celular']
  }

}

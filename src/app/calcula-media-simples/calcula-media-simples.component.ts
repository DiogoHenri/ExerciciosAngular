import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcula-media-simples',
  templateUrl: './calcula-media-simples.component.html',
  styleUrls: ['./calcula-media-simples.component.css']
})
export class CalculaMediaSimplesComponent implements OnInit {
  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  media: number;
  situacao : string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac1 =  this.route.snapshot.params['ac1'] ?
                  parseFloat(this.route.snapshot.params['ac2']) : 0;
    this.ac2 = this.route.snapshot.params['ac2'] ?
                parseFloat(this.route.snapshot.params['ac2']) : 0;
    this.ag = this.route.snapshot.params['ag'] ?
                parseFloat(this.route.snapshot.params['ag']) : 0;
    this.af = this.route.snapshot.params['af'] ?
                parseFloat(this.route.snapshot.params['af']) : 0;
  }
  resultado(){
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)
    if (this.media < 5) {
      this.situacao =("reprovado")
    }else{
      this.situacao = ("aprovado")
    }
  }
 
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f2l',
  templateUrl: './f2l.component.html',
  styleUrls: ['./f2l.component.scss']
})
export class F2lComponent implements OnInit {

  public number = -1;
  public hint: string;
  public showHints: boolean;

  private MIN = 2;
  private MAX = 9;

  public algos = [
    '',
    '',
    'y\' (R\' U\' R)',
    '(R U R\')',
    'd (R\' U\' R U\') (R\' U\' R)',
    'U\' (R U2 R\') d (R\' U\' R)',
    'd (R\' U R U\') (R\' U\' R)',
    'U\' (R U R\' U) (R U R\')',
    'R U\' R\' U R U\' R\' U2 R U\' R\'',
    'U\' (R U\' R\' U) (R U R\')'
  ];

  constructor() { }

  ngOnInit() {

    this.genNewImg();
  }

  public genNewImg(): void {
    let rand = -1;
    do {
      rand = Math.floor(Math.random() * (this.MAX + 1 - this.MIN)) + this.MIN;
    } while (this.number === rand);
    this.number = rand;
    this.hint = '';
    if (this.showHints) {
      this.showAlg();
    }
  }

  public toggleHint(): void {
    this.showHints = !this.showHints;
  }

  public showAlg(): void {
    this.hint = this.algos[this.number];
  }
}

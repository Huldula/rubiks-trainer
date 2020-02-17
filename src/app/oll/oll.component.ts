import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oll',
  templateUrl: './oll.component.html',
  styleUrls: ['./oll.component.scss']
})
export class OllComponent implements OnInit {

  public number = -1;

  public MIN = 15;
  public MAX = 28;

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
  }

}

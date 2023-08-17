import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>contador: {{counter}}</h1>
<button (click)="contador(1)">1</button>
<button (click)="reset()">reset</button>
<button (click)="contador(-1)">-1</button>`,
})

export class CounterComponent{
  public title:string = 'hola mundo';
  public counter:number=10;

  contador(value:number):void{
      this.counter+=value;
  }
  reset(){
    this.counter=10;
  }


}

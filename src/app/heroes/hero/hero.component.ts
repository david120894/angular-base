import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Iroman';
  public age: number = 45;

  get capitalizarName(): string{
    return this.name.toUpperCase();
  }

  getHeroDiscription():string{
    return `${this.name}-${this.age}`
  }

  changeHero():void{
    this.name='Batman'
  }
  changeAge(){
    this.age=40
  }
}

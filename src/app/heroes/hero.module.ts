import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  imports: [],
  exports: [
    HeroComponent,
    ListComponent],
  declarations: [
    HeroComponent,
    ListComponent],
})
export class HeroModule { }

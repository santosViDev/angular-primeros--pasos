import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(name:string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;


    // Estas líneas, por ser JS directo,  están fuera del ciclo de detección de cambios de Angular
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'; // cambia el primer h1 que encuentra
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
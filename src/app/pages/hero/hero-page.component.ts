import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
        templateUrl: './hero-page.component.html',
        imports: [UpperCasePipe ],
})
export class HeroPageComponent {
 name = signal('Superman');
 age = signal(30);

 herosDescription = computed( () => {
    const descripcion = `${ this.name() } - ${ this.age() } años`;

    return descripcion;
  });
capitlizeName = computed( () =>  this.name().toUpperCase() );

 getHeroDescription() {

    return `${ this.name() } - ${ this.age() } años`;
 }
  changeHero() {
    this.name.set('Spiderman');
    this.age.set(25);
 }

  resetForm() {
    this.name.set('Superman');
    this.age.set(30);
 }
 changeAge() {
    this.age.set(60);
 }

}

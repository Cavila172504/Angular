import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
 templateUrl: './counter.html',

 styles:`
 button {
  padding: 5px;
  margin: 5px;
  width: 60px;
 }`,
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  counter = 1;
  couterSignal = signal( 1);

  constructor(){
    setInterval(()=>{
      //this.counter += 1;
      this.couterSignal.update((v) => v + 1);
      console.log('Tick');
      }, 2000);

  }


  increaseBy(value: number) {
    this.counter += value;
    this.couterSignal.update( current => current + value );
  }
  resetCouter() {
    this.counter = 1;
    this.couterSignal.set(1);
  }
}

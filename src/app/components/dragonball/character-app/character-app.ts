import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { Character } from '../../../interface/character.interface';


@Component({
  selector: 'dragonball-character-app',
  templateUrl: './character-app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterApp {
  name = signal<string>('');
  powerlevel = signal<number>(0);

  newCharacter = output<Character>();



  addCharacter(){
    if (!this.name() || this.powerlevel() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      powerlevel: this.powerlevel(),
    };

   // this.characters.update((list: Character[]) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.powerlevel.set(0);
  }

}

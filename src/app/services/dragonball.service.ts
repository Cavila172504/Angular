import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interface/character.interface';

@Injectable({  providedIn: 'root'})
export class DragonballService {
   characters = signal<Character[]>([
      { id: 1, name: 'goku', powerlevel: 9001 },
      { id: 2, name: 'vegeta', powerlevel: 8001 },
    ]);

    saveToLocalStorage = effect( () => {

      localStorage.setItem( 'characters', JSON.stringify(this.characters()) );
})

    addCharacter(newCharacter: Character){
      this.characters.update((list: Character[]) => [...list, newCharacter]);
    }

  }


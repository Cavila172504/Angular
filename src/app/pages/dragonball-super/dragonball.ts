import { Component, signal} from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list";
import { Character } from "../../interface/character.interface";
import { CharacterApp } from "../../components/dragonball/character-app/character-app";

//interface Character {
   // name: string;
    //id: number;
    //powerLevel: number;
//}
@Component({
 templateUrl: './dragonball-super.html',
 selector: 'dragonball-page-super',
 imports: [CharacterList, CharacterApp],

})
export class DragonballPagesuperComponent {

    name = signal ('');
    powerLevel = signal (0);

    characters = signal<Character[]>([
    {id:1,name:'goku',powerlevel:9001},
    {id:1,name:'vegeta',powerlevel:8001},

]);

addCharacter(newCharacter: Character){
  this.characters.update((list) => [...list, newCharacter]);

}
resetFields(){
    this.name.set('');
    this.powerLevel.set(0);
}

}

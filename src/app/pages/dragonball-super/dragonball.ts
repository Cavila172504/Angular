import { Component, signal, inject } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list";
import { Character } from "../../interface/character.interface";
import { CharacterApp } from "../../components/dragonball/character-app/character-app";
import { DragonballService } from "../../services/dragonball.service";

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


  public dragonballService = inject(DragonballService);

}

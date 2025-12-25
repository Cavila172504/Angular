import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import

@Component({   
    selector: 'dragonball-character-list',
    templateUrl: './character-list.html',
   
    

})
export class DragonballCharacterListComponent {
    characters = input.required()
}
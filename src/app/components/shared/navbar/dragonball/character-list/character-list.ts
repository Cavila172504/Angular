import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList { }

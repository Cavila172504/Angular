import { describe, it, expect } from 'vitest';
import { DragonballPagesuperComponent } from './dragonball';
import type { Character } from '../../interface/character.interface';

describe('DragonballPagesuperComponent', () => {
  it('should add a new character when addCharacter is called', () => {
    const page = new DragonballPagesuperComponent();
    const initial = page.characters().length;

    const sample: Character = { id: 999, name: 'test', powerlevel: 1234 };
    page.addCharacter(sample);

    expect(page.characters().length).toBe(initial + 1);
    expect(page.characters()[page.characters().length - 1]).toEqual(sample);
  });
});

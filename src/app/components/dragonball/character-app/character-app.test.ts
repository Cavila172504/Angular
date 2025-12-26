import { describe, it, expect, vi } from 'vitest';
import { CharacterApp } from './character-app';
import type { Character } from '../../../interface/character.interface';

describe('CharacterApp', () => {
  it('emits newCharacter and resets fields when adding a valid character', () => {
    const comp = new CharacterApp();
    comp.name.set('Krillin');
    comp.powerlevel.set(1234);

    const spy = vi.spyOn(comp.newCharacter, 'emit');

    comp.addCharacter();

    expect(spy).toHaveBeenCalled();
    const emitted: Character = spy.mock.calls[0][0];
    expect(emitted.name).toBe('Krillin');
    expect(emitted.powerlevel).toBe(1234);
    expect(comp.name()).toBe('');
    expect(comp.powerlevel()).toBe(0);
  });
});
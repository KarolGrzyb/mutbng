import { Rational } from './rational';

export const NoteNames: string[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export class Pitch {
  private _semisFromC1: Rational;

  constructor(semisFromC1: Rational) {
    this._semisFromC1 = semisFromC1;
  }

  static fromNoteName(name: string): Pitch {
    const ind = NoteNames.indexOf(name);
    if (ind === -1) {
      throw `Unknown note name ${name}`;
    }
    return new Pitch(Rational.fromInteger(ind));
  }

  octave(): number {
    return Math.floor(this._semisFromC1.toNumber() / 12) + 1;
  }

  noteName(): string {
    const noteNum = this._semisFromC1.toNumber() % 12;
    const postfix: string = Number.isInteger(noteNum) ? '' : '+';
    return NoteNames[Math.floor(noteNum)] + postfix;
  }

  toString(): string {
    return this.noteName() + this.octave();
  }

  get semisFromC1(): Rational {
    return this._semisFromC1;
  }
}

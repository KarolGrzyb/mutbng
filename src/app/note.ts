import { Pitch } from './pitch';
import { Rational } from './rational';
import { ValueControler } from './value-controler';

export class Note {
  pitch: Pitch;
  length: Rational;
  vibrato: ValueControler<Rational>;
  velocity: Rational;
}

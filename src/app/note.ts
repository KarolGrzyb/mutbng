import { Pitch } from './pitch';
import { Rational } from './rational';
import { ConstantControler, ValueControler } from './value-controler';

export class Note {
  pitch: Pitch;
  time: Rational;
  length: Rational;
  vibrato: ValueControler<Rational>;
  velocity: Rational;
}

import { Note } from "./note";
import { Pitch } from "./pitch";
import { Rational } from "./rational";
import { ValueControler } from "./value-controler";

export class Fragment {
  time: Rational;
  key: Pitch;
  timeSignature: Rational;
  notes: Note[];
  repetitions: number;
  alternateEndings: Fragment[];
}
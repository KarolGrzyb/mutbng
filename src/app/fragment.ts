import { Pitch } from "./pitch";
import { Rational } from "./rational";
import { ValueControler } from "./value-controler";

export class Fragment {
  bpm: ValueControler<Rational>;
  key: Pitch;
  timeSignature: Rational;
}
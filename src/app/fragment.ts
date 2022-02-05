import { Pitch } from "./pitch";
import { Rational } from "./rational";

export class Fragment {
  bpm: Rational;
  key: Pitch;
  timeSignature: Rational;
}
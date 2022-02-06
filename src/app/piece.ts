import { Fragment } from "./fragment";
import { Rational } from "./rational";

export class BpmEvent {
  time: Rational;
  bpm: number;
}

export class Piece {
  name: string;
  fragments: Fragment[];
  initialBpm: number;

}
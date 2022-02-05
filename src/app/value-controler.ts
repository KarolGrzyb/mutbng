import { Rational } from './rational';

export interface ValueControler<T> {
  value(time: Rational): T;
}

export class ConstantControler<T> implements ValueControler<T> {
  val: T;
  constructor(val: T) {
    this.val = val;
  }
  value(time: Rational): T {
    return this.val;
  }
}

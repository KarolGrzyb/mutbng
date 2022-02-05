import { retry } from "rxjs/operators";

export class Rational {
  private _nominator: number;
  private _denominator: number;

  constructor(nominator: number, denomiator: number) {
    this._nominator = nominator;
    this._denominator = denomiator;
    this.validate();
  }

  get nominator() : number {
    return this._nominator;
  }

  get denominator() : number {
    return this._nominator;
  }

  negate() : Rational {
    return new Rational(-this._nominator, this._denominator);
  }

  add(b: Rational) : Rational {
    const lcm = this.lcm(this._denominator,b._denominator);
    this.changeDenominator(lcm);
    b.changeDenominator(lcm);
    const res = new Rational(this._nominator + b._nominator, lcm);
    res.simplify();
    return res;
  }

  minus(b: Rational): Rational {
    return this.add(b.negate());
  }

  simplify() {
    const gcd = this.gcd(this._nominator, this._denominator);
    this._nominator = this._nominator / gcd;
    this._denominator = this._denominator / gcd;
    this.validate();
  }

  validate() {
    if (!Number.isInteger(this._nominator)) {
      throw `Wrong rational ${this.toString()}`;
    }
    if (!Number.isInteger(this._denominator)) {
      throw `Wrong rational ${this.toString()}`;
    }
    if (this._denominator === 0) {
      throw `Wrong rational ${this.toString()}`;
    }
  }

  toString(): String {
    return `${this._nominator}/${this._denominator}`;
  }

  changeDenominator(newDenomitor: number) {
    const q = newDenomitor / this._denominator;
    this._denominator = newDenomitor;
    this._nominator = this._nominator * q;
    this.validate();
  }

  private lcm(x: number, y:number) : number {
    return x*y / this.gcd(x,y);
  }
  private gcd(x: number, y:number) : number {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
}
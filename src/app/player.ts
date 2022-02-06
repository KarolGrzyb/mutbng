import { Piece } from "./piece";
import {Rational } from "./rational";

import {Transport, } from "tone"

export class Player {
  piece: Piece;
  playFrom: Rational;
  offset: Rational;
  
  constructor(piece:Piece, playFrom: Rational, offset:Rational) {
    this.piece = piece;
    this.playFrom = playFrom;
    this.offset = offset;
    Transport.cancel();
    Transport.bpm.cancelScheduledValues(0);
    const pulsePerUnit = 4 * Transport.PPQ;
    Transport.bpm.setValueAtTime(piece.initialBpm,0);
    piece.fragments.forEach(fragment=>{
        const fragmentTime = offset.add(fragment.time);
    });
  }


}
import { Piece } from "./piece";
import {Rational } from "./rational";

import {Transport,PolySynth } from "tone"

export class Player {
  piece: Piece;
  playFrom: Rational;
  offset: Rational;
  instrument: PolySynth;
  
  constructor(piece:Piece, playFrom: Rational, offset:Rational) {
    this.instrument = new PolySynth();
    this.piece = piece;
    this.playFrom = playFrom;
    this.offset = offset;
    Transport.cancel();
    Transport.bpm.cancelScheduledValues(0);
    const pulsePerUnit = 4 * Transport.PPQ;
    Transport.bpm.setValueAtTime(piece.initialBpm,0);
    piece.fragments.forEach(fragment=>{
        const fragmentTime = offset.add(fragment.time);
        fragment.notes.forEach(note=>{
          const noteTime = note.time.add(fragmentTime);
          const freq = note.pitch.toHertz(440.);
          const startPulse = Math.floor(noteTime.toNumber() * pulsePerUnit);
          const durationPulse = Math.floor(note.length.toNumber() * pulsePerUnit);
          this.instrument.triggerAttackRelease(`${freq}hz`,`${startPulse}i`,`${durationPulse}i`);
        });
        
    });
  }


}
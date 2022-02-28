import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TailleService {
  constructor() { }

  cmToPouce(value: number) {
    return value / 2.54;
  }
  pouceToCm(value: number) {
    return value * 2.54;
  }

  cmToPied(value: number) {
    return value / 30.48;
  }
  piedToCm(value: number) {
    return value * 30.48;
  }

  cmToInche(value: number) {
    return value * 0.3937;
  }
  incheToCm(value: number) {
    return value / 0.3937;
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TailleService {
 
  constructor() { }
 
  cmToPouce(value: number){
    return value/2.54;
  }
  
  pouceToCm(value: number){
    return value*2.54;
     
   }

   cmToPied(value: number){
    return value/30.48 ;
  } 
  piedToCm(value: number){
    return value*30.48;
     
   }
  
}

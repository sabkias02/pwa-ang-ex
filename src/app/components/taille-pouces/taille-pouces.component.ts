import { TailleService } from './../../taille.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-taille-pouces',
  templateUrl: './taille-pouces.component.html',
  styleUrls: ['./taille-pouces.component.css']
})
export class TaillePoucesComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
 
  private _centimetre:string = '' ;
  private _pouce:string = '';

  constructor(private tailleService:TailleService) { }
  

  get centimetre(){
    return this._centimetre;
  }

  set centimetre(val: string) {
    //do some extra work here
    this._centimetre = val;
  }
  

  get pouce(){
    return this._pouce;
  }

  set pouce(val: string) {
    //do some extra work here
    this._pouce = val;
  }

  cmToPouce(){
    const result = this.tailleService.cmToPouce(Number(this._centimetre));
    this._pouce = result.toString();
  }

  pouceToCm(){
    const result = this.tailleService.pouceToCm(Number(this._pouce));
    this._centimetre = result.toString();
  }

  ngOnInit(): void {
  }

}

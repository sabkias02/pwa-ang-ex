import { TailleService } from './../../taille.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-taille-inches',
  templateUrl: './taille-inches.component.html',
  styleUrls: ['./taille-inches.component.css']
})
export class TailleInchesComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
 
  private _centimetre:string = '' ;
  private _inche:string = '';

  constructor(private tailleService:TailleService) { }
  

  get centimetre(){
    return this._centimetre;
  }

  set centimetre(val: string) {
    //do some extra work here
    this._centimetre = val;
  }
  

  get inche(){
    return this._inche;
  }

  set inche(val: string) {
    //do some extra work here
    this._inche = val;
  }
 
  cmToInche(){
    const result = this.tailleService.cmToInche(Number(this._centimetre)).toFixed(2);
    this._inche = result.toString();
  }

  incheToCm(){
    const result = this.tailleService.incheToCm(Number(this._inche)).toFixed(2);
    this._centimetre = result.toString();
  }

  ngOnInit(): void {
  }

}

  

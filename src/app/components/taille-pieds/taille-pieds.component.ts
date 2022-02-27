import { Component, OnInit } from '@angular/core';
import { TailleService } from 'src/app/taille.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-taille-pieds',
  templateUrl: './taille-pieds.component.html',
  styleUrls: ['./taille-pieds.component.css']
})
export class TaillePiedsComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
  private _centimetre:string = '' ;
  private _pied:string = '';
  constructor(private tailleService:TailleService) { 
    
  }
   
   
 

  get centimetre() {
    return this.centimetre;
  }

  set centimetre(val: string) {
    //do some extra work here
    this.centimetre = val;
  }
  

  get pied() {
    return this._pied;
  }

  set pied(val: string) {
    //do some extra work here
    this.pied = val;
  }
  cmToPied(){
    const result = this.tailleService.cmToPied(Number(this._centimetre));
    this._pied = result.toString();

  }
 piedToCm(){
  const result = this.tailleService.piedToCm(Number(this._pied));
  this._centimetre = result.toString();
 }

  ngOnInit(): void {
    
    
  }
}

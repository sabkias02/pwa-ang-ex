import { Component, OnInit } from '@angular/core';
import { TailleService } from 'src/app/taille.service';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taille-pieds',
  templateUrl: './taille-pieds.component.html',
  styleUrls: ['./taille-pieds.component.css']
})
export class TaillePiedsComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
  private _centimetre:string = '' ;
  private _pied:string = '';
  name:string='';
  constructor(private tailleService:TailleService, private route: ActivatedRoute) { 
    
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
    const result = this.tailleService.cmToPied(Number(this._centimetre)).toFixed(2);
    this._pied = result.toString();

  }
 piedToCm(){
  const result = this.tailleService.piedToCm(Number(this._pied)).toFixed(2);
  this._centimetre = result.toString();
 }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  
    
  }
}

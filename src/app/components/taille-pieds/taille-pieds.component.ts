import { TailleService } from './../../taille.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-taille-pieds',
  templateUrl: './taille-pieds.component.html',
  styleUrls: ['./taille-pieds.component.css']
})
export class TaillePiedsComponent implements OnInit {
  floatLabelControl = new FormControl('auto');

  private _centimetre: string = '';
  private _pied: string = '';

  constructor(private tailleService: TailleService) { }

  get centimetre() {
    return this._centimetre;
  }
  set centimetre(val: string) {
    //do some extra work here
    this._centimetre = val;
  }

  get pied() {
    return this._pied;
  }

  set pied(val: string) {
    //do some extra work here
    this._pied = val;
  }

  cmToPied() {
    const result = this.tailleService.cmToPied(Number(this._centimetre)).toFixed(2);
    this._pied = result.toString();
  }

  piedToCm() {
    const result = this.tailleService.piedToCm(Number(this._pied)).toFixed(2);
    this._centimetre = result.toString();
  }

  ngOnInit(): void {
  }

}



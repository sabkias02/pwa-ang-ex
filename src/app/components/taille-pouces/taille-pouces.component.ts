import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-taille-pouces',
  templateUrl: './taille-pouces.component.html',
  styleUrls: ['./taille-pouces.component.css']
})
export class TaillePoucesComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
  constructor() { }

  ngOnInit(): void {
  }

}

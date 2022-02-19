import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temps-par-jours',
  templateUrl: './temps-par-jours.component.html',
  styleUrls: ['./temps-par-jours.component.css']
})
export class TempsParJoursComponent implements OnInit {
  name: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}











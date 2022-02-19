import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  tabs : any = [{label: "temps-par-heures", link: "/temps-par-heures"}, {label: "temps-par-jour", link: "/temps-par-jour"}]
  
} 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  tabs : any = [{label: "taille-pouces", link: "/taille-pouces"}, {label: "taille-inches", link: "/taille-inches"},{label: "taille-pieds", link: "/taille-pieds"}]
  
} 
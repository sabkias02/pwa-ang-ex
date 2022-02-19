import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TaillePiedsComponent } from './components/taille-pieds/taille-pieds.component';
import {TaillePoucesComponent} from './components/taille-pouces/taille-pouces.component';




const routes: Routes = [
 { path: 'taille-pieds', component: TaillePiedsComponent },
 { path: 'taille-pouces', component: TaillePoucesComponent },
];

@NgModule({
 imports: 
  [RouterModule.forRoot(routes, { useHash: true })],
 exports: [RouterModule]
})
export class AppRoutingModule { }//L<B:'









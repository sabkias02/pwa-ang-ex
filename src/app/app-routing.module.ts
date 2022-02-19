import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TempsParHeuresComponent } from './components/temps-par-heures/temps-par-heures.component';
import {TempsParJoursComponent } from './components/temps-par-jours/temps-par-jours.component';


const routes: Routes = [
 { path: 'temps-par-heures', component: TempsParHeuresComponent },
 { path: 'temps-par-jours', component: TempsParJoursComponent },
];

@NgModule({
 imports: 
  [RouterModule.forRoot(routes, { useHash: true })],
 exports: [RouterModule]
})
export class AppRoutingModule { }

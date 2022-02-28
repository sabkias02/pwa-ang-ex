import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TaillePoucesComponent } from './components/taille-pouces/taille-pouces.component';
import { TailleInchesComponent } from './components/taille-inches/taille-inches.component';
import { TaillePiedsComponent } from './components/taille-pieds/taille-pieds.component';


const routes: Routes = [

    { path: 'taille-pouces', component: TaillePoucesComponent },

    { path: 'taille-inches', component: TailleInchesComponent },
    { path: 'taille-pieds', component: TaillePiedsComponent },
];

@NgModule({
    imports:

        [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }//L<B:'









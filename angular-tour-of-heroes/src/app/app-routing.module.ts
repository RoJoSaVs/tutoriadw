import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { LuciaComponent } from './lucia/lucia.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListFromInputComponent } from './list-from-input/list-from-input.component';


const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'lucia', component: LuciaComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: "list-input", component: ListFromInputComponent},
    { path: '', redirectTo: 'heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

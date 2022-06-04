import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { LuciaComponent } from './lucia/lucia.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'lucia', component: LuciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

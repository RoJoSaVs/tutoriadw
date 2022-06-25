import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { LuciaComponent } from './lucia/lucia.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListFromInputComponent } from './list-from-input/list-from-input.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ServiceTesterComponent } from './service-tester/service-tester.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { PostMethodComponent } from './post-method/post-method.component';
import { FormTestComponent } from './form-test/form-test.component';


const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'lucia', component: LuciaComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: "list-input", component: ListFromInputComponent},
    { path: "snapshot", component: SnapshotComponent},
    { path: 'snapshot/:sn', component: SnapshotComponent},
    { path: 'snapshot/:sn/:lecturer', component: SnapshotComponent},
    { path: 'departmentlist', component:DepartmentListComponent },
    { path: 'departmentlist/:id', component:DepartmentDetailComponent },
    { path: 'servicetester', component: ServiceTesterComponent },
    { path: 'getpokemon', component:  GetPokemonComponent},
    { path: 'postmethod', component:  PostMethodComponent},
    { path: 'formtester', component:  FormTestComponent},
    { path: '', redirectTo: 'heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

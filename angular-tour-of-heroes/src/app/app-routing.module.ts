import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListFromInputComponent } from './list-from-input/list-from-input.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ServiceTesterComponent } from './service-tester/service-tester.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { PostMethodComponent } from './post-method/post-method.component';
import { FormTestComponent } from './form-test/form-test.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';
import { FullCrudComponent } from './full-crud/full-crud.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: "list-input", component: ListFromInputComponent},
    { path: "snapshot", component: SnapshotComponent},
    { path: 'snapshot/:sn', component: SnapshotComponent},
    { path: 'snapshot/:sn/:lecturer', component: SnapshotComponent},
    { path: 'departmentlist', component:DepartmentListComponent },
    { path: 'departmentlist/:id', component:DepartmentDetailComponent },
    { path: 'servicetester', component: ServiceTesterComponent },
    { path: 'getpokemon', component: GetPokemonComponent},
    { path: 'postmethod', component: PostMethodComponent},
    { path: 'formtester', component: FormTestComponent},
    { path: 'formngmodel', component: FormNgModelComponent},
    { path: 'fullcrud', component:FullCrudComponent},
    { path: 'crud', component: CrudComponent},
    { path: '', redirectTo: 'heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

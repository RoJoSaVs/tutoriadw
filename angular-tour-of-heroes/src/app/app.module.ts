import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LuciaComponent } from './lucia/lucia.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFromInputComponent } from './list-from-input/list-from-input.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

import { CrudService } from './crud.service';
import { ServiceTesterComponent } from './service-tester/service-tester.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { PostMethodComponent } from './post-method/post-method.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        LuciaComponent,
        PokemonComponent,
        ListFromInputComponent,
        SnapshotComponent,
        DepartmentListComponent,
        DepartmentDetailComponent,
        ServiceTesterComponent,
        GetPokemonComponent,
        PostMethodComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        LuciaComponent,
        PokemonComponent,
        ListFromInputComponent,
        SnapshotComponent,
        DepartmentListComponent,
        DepartmentDetailComponent
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

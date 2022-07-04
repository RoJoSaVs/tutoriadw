import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { PokemonDexComponent } from './pokemon-dex/pokemon-dex.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { WeatherComponent } from './weather/weather.component';
import { VideoComponent } from './video/video.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "pokemon", component: PokemonDexComponent},
    { path: "pokemon/:pokename", component: PokemonDetailComponent},
    { path: "weather", component: WeatherComponent },
    { path: "video", component: VideoComponent},
    { path: "task", component: TasksComponent},
    { path: "canvas", component: CanvasComponent},
    { path: "dashboard", component: DashboardComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

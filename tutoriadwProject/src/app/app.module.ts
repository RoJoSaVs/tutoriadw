import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { MaterialLibsModule } from './utilityLibs/materialLibs';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { FunnyComponent } from './funny/funny.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        SidebarComponent,
        ListComponent,
        FunnyComponent,
        TaskListComponent,
        TaskViewerComponent,
        AddTaskComponent,
        TaskDetailComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MaterialLibsModule,
        HttpClientModule,
        ReactiveFormsModule,

        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { FunnyComponent } from './funny/funny.component';
import { ListComponent } from './list/list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: "list", component: ListComponent },

    { path: "task", component: TaskViewerComponent },
    { path: "task/add", component: AddTaskComponent },
    { path: "task/detail/:taskId", component: TaskDetailComponent },
    
    { path: "funny", component: FunnyComponent },
    { path: "test", component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

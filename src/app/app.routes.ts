import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

export const routes: Routes = [
    {path: '', component: TaskFormComponent},
    {path: 'task/new', component: TaskListComponent},
];

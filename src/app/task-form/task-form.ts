import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/service.task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="newTask" placeholder="Enter task" />
    <button (click)="addTask()">Add Task</button>
  `
})
export class TaskFormComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}

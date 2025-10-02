import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/service.task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let task of taskService.getTasks()">
        <input
          type="checkbox"
          [checked]="task.completed"
          (change)="taskService.toggleTask(task.id)"
        />
        <span [style.text-decoration]="task.completed ? 'line-through' : 'none'">
          {{ task.title }}
        </span>
        <button (click)="taskService.removeTask(task.id)"></button>
      </li>
    </ul>
    <p>Total Tasks: {{ taskService.getTotalTasks() }}</p>
  `
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}
}

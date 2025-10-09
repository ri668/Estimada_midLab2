import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/service.task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent{
  constructor(public taskService: TaskService) {}

  get remainingTasks(): number {
    return this.taskService.getTotalTasks();
  }

  get completedTasks(): number {
    return this.taskService.getTasks().filter(task => task.completed).length;
  }
}

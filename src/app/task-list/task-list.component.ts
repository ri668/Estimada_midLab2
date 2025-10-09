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

}

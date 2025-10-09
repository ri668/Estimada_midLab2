import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/service.task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'] 
    
})
export class TaskFormComponent {
  newTask = '';
  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}

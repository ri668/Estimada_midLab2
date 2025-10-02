import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.tasks.push({
        id: this.nextId++,
        title,
        completed: false
      });
    }
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/service.task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  
}

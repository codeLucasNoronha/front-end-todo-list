import { Router } from '@angular/router';
import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router) { }

 async ngOnInit() {
     this.tasks = await this.taskService.getAll();
  }

  async remove(task:Task) {
   await this.taskService.delete(task.id);
    window.location.reload();
  }

  onCompletedCheckChange(task: Task) {
    this.taskService.save(task);
  }
}

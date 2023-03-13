import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task(0,'',false);
  title: string = 'nova tarefa';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  async ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      const valor = await this.taskService.getById(parseInt(id));
      if(valor) {
        this.task = valor
        this.title = 'alterando tarefa'
      }

    }
  }

  onSubmit() {
    console.log('teste onsubmit')
    this.taskService.save(this.task)
    this.router.navigate(['']);
  }

}

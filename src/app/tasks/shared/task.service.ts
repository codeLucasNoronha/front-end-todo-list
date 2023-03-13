import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false},
    { id: 2, description: 'fazer exercicio', completed: false},
    { id: 3, description: 'assistir aula', completed: false},
    { id: 4, description: 'assitir bokunohero', completed: false},
    { id: 5, description: 'assistir shingeki', completed: false},
    { id: 6, description: 'limpar casa', completed: false},
    { id: 7, description: 'compra passagem', completed: false},
    { id: 8, description: 'estudar', completed: false},
    { id: 9, description: 'fazer desafio', completed: false},
    { id: 10, description: 'desafio hands-on executar', completed: false},
  ];

  constructor() { }

  getAll() {
    return this.tasks;
  }
}


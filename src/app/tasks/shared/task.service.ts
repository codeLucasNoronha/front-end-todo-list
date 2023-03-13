import { Task } from './task';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false},
    { id: 2, description: 'fazer exercicio', completed: false},
    { id: 3, description: 'assistir aula', completed: true},
    { id: 4, description: 'assitir bokunohero', completed: false},
    { id: 5, description: 'assistir shingeki', completed: false},
    { id: 6, description: 'limpar casa', completed: false},
    { id: 7, description: 'compra passagem', completed: false},
    { id: 8, description: 'estudar', completed: false},
    { id: 9, description: 'fazer desafio', completed: false},
    { id: 10, description: 'desafio hands-on executar', completed: false},
  ];

  constructor() { }

  async getAll() {
    const requisicao = await axios.get('http://127.0.0.1:8000/todolist/')
    return requisicao.data.map((task: TaskBackend) =>{
      return{id: task.id, description: task.detalhamento, completed: task.concluido}
    })

  }

  async getById(id:number) {
    try {
      const requisicao = await axios.get(`http://127.0.0.1:8000/todolist/${id}/`)
      const task = requisicao.data
      return{id: task.id, description: task.detalhamento, completed: task.concluido}
    } catch(error){
      return null
    }
  }

  async save(task: Task) {
    if (task.id) {
       await axios.put(`http://127.0.0.1:8000/todolist/${task.id}/`,{
        detalhamento: task.description,
        concluido: task.completed
      })

    } else {
      await axios.post(`http://127.0.0.1:8000/todolist/`,{
        detalhamento: task.description,
        concluido: false
      })

    }
  }
  async delete(id:number) {
    await axios.delete(`http://127.0.0.1:8000/todolist/${id}/`)

  }
}
interface TaskBackend {
  id: number,
  detalhamento: string,
  concluido: boolean
}



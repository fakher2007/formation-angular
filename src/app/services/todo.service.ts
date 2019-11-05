import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  constructor() { }

  // Add Todo
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  // Remove Todo
  removeTodo(todo: Todo) {
    const pos = this.todos.indexOf(todo, 0);
    console.log(pos);
    if (pos > -1) {
        this.todos.splice(pos, 1);
    }
  }

  // Retrieve Todo
  retrieveTodo() {
     return this.todos;
  }

  // Log Todo
  logTodo(todo: Todo) {
    console.log(todo.name + ' ' + todo.content);
  }

}

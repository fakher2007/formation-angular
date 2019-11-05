import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: string;
  content: string;
  todo: Todo;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { this.todos = this.todoService.retrieveTodo(); }

  ngOnInit() {
  }

  addTodo() {
    this.todo = new Todo();
    this.todo.name = this.name;
    this.todo.content = this.content;
    this.todoService.addTodo(this.todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }

}

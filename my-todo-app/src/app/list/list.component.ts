import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  newTodo: Todo;
  title = 'app';
  list: Todo[];
  _todoService : TodoService;
  constructor(todoService: TodoService) {
    // by default list contains "true" (not done yet) items
    this._todoService = todoService;
    if (this._todoService.getList() === undefined){
      this._todoService.getJSON().subscribe(data => {
        this.list = data;
        this.newTodo = new Todo(this.list.length + 1, '', false);
      });
    } else {
      this.list = this._todoService.getList();
      this.newTodo = new Todo(this.list.length + 1, '', false);
    }
  }

  listByState(state: Boolean): Todo[] {
    return this.list.filter(item => item.state === state);
  }

  add(){
    this._todoService.add(this.newTodo);
    this.list = this._todoService.getList();
    this.newTodo = new Todo(this.list.length + 1, '', false);
  }
}

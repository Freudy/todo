import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title = 'app';
  list: Todo[];
  constructor(todoService: TodoService) {
    // by default list contains "true" (not done yet) items
    todoService.getJSON().subscribe(data => {
      this.list = data;
    });
  }

  listByState(state: Boolean): Todo[] {
    return this.list.filter(item => item.state === state);
  }
}

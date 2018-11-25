import { Component } from '@angular/core';
import { Todo } from '../app/models/Todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list: Todo[];
  constructor(todoService: TodoService){
    // by default list contains "true" (not done yet) items
    todoService.getJSON().subscribe(data => {
      this.list = data;
    });
  }

  listByState(state: Boolean): Todo[] {
    return this.list.filter(item => item.state === state);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  selectedtodo: Todo;
  constructor(
    private route: ActivatedRoute,
    private service: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.service.getJSON().subscribe(todos => 
        this.selectedtodo = todos.filter(todo => todo.id == params.id)[0]));
  }

}

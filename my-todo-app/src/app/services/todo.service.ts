import { HttpClient } from '@angular/common/http';
import { listener } from '@angular/core/src/render3/instructions';
import { Todo } from '../models/Todo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  list: Todo[];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/mocks/Todo.json');
  }

}

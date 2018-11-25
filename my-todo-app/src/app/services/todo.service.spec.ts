import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { Todo } from '../models/Todo.model';

describe('TodoService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [AppModule, HttpClientModule]
    });
  }));

  it('should have, at minimal, a related state and title', async((service: TodoService) => {
    const todo = new Todo('test', true);
    expect(todo.title).toBeTruthy();
    expect(todo.state).toBeTruthy();
  }));
});

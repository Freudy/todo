import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { by, By, element } from 'protractor';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/Todo.model';
import { of } from 'rxjs';
describe('AppComponent', () => {
  beforeEach(async(() => {
    const testTodo = new Todo('un', true);
    const todoService = jasmine.createSpyObj('TodoService', ['getJSON']);
    const getTodoSpy = todoService.getJSON.and.returnValue( of(testTodo) );

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: TodoService, useValue: todoService }],
      imports: [HttpClientModule,
        MatCheckboxModule,
        FormsModule]
    }).compileComponents();
  }));

  // it('should be placed at the bottom of the list and should be crossed out when a todo is done', async(() => {
    // I have no idea how to do this, below is some garbage tests :/
  //   //by.id('todoList');
  //   const fixture = TestBed.createComponent(AppComponent);
    
  //   const testTodo = new Todo('un', true);
  //   const todoService = jasmine.createSpyObj('TodoService', ['getJSON']);
  //   const getTodoSpy = todoService.getJSON.and.returnValue( of(testTodo) );
  //   fixture.detectChanges(); 

  //   const quoteEl = fixture.nativeElement.querySelector('.todoList');
  //   expect(quoteEl.textContent).toBe(testTodo);
  //   expect(getTodoSpy.calls.any()).toBe(true, 'getQuote called');

  //   const list = element(by.css('#todoList'));
  //   console.log(list);


  // }));
});

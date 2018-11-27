import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: TodoService, useValue: TodoService }],
      imports: [HttpClientModule,
        MatCheckboxModule,
        FormsModule]
    }).compileComponents();
  }));
});

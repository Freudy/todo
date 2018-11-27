import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  {path: 'todo/:id', component: TodoComponent},
  {path: 'list', component: ListComponent},
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  {path: '**', component: ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

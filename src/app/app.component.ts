import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './module/task/components/todo-list/todo-list-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoList],
  template: ` <todo-list><todo-list /></todo-list>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
}

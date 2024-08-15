import { Component } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item-component';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      @if (!list.length) {
      <p>No hay ninguna tarea</p>
      } @else {
      <todo-list-item [list]="list"></todo-list-item>
      }
    </ul>
  `,
  imports: [TodoListItem],
  standalone: true,
})
export class TodoList {
  //Properties
  list: string[] = [];

  constructor() {}
}

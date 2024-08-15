import { Component } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item-component';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
  `,
  imports: [TodoListItem],
  standalone: true,
})
export class TodoList {}

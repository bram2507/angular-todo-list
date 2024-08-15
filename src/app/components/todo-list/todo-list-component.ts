import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListItem } from '../todo-list-item/todo-list-item-component';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <section>
        <div>
          <textarea [(ngModel)]="item"></textarea>
        </div>
        <div>
          <button (click)="addListItem()">Añadir</button>
        </div>
      </section>
      @if (!list.length) {
      <p>No hay ninguna tarea</p>
      } @else {
      <todo-list-item [list]="list"></todo-list-item>
      }
    </ul>
  `,
  imports: [TodoListItem, FormsModule],
  standalone: true,
})
export class TodoList {
  //Properties
  list: string[] = [];
  item: string = '';

  constructor() {}

  addListItem(): void {
    this.list.push(this.item);
    this.item = '';
  }
}

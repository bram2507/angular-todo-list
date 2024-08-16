import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoListItem } from '../todo-list-item/todo-list-item-component';
import { TodoApiService } from '../../services/todo-list.service';

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
      <todo-list-item
        [list]="list"
        (updateListItems)="deleteListItem($event)"
      ></todo-list-item>
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
  service = inject(TodoApiService);

  constructor() {}

  ngOnInit() {
    this.service.getDataWithPromise().then((data) => {
      console.log(data);
    });
  }

  addListItem(): void {
    this.list.push(this.item);
    this.item = '';
  }

  deleteListItem(index: number): void {
    this.list = this.list.filter((value, i) => index != i);
    console.log('Event::updateListItems' + ' recived');
  }
}

import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoListItem } from '../todo-list-item/todo-list-item-component';
import {
  TodoApiService,
  APIMock,
  APIObject,
} from '../../services/todo-list.service';

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
  public list: string[] = [];
  public item: string = '';
  private httpService = inject(TodoApiService);
  private serviceData: Object = {};

  constructor() {}

  ngOnInit() {
    this.httpService.getDataHttpRequest().subscribe((value) => {
      this.serviceData = { ...(<APIMock>value).results };
      Object.entries(this.serviceData).map((val) => {
        console.log((<APIObject>val[1]).name);
      });
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

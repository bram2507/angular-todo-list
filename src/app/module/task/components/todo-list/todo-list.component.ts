import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TodoListItem } from '@module/task/components/todo-list-item/todo-list-item.component';
import {
  TodoApiService,
  APIMock,
  APIObject,
} from '@infrastructure/services/todo-list.service';

@Component({
  selector: 'todo-list',
  template: `
    <section>
      <mat-form-field>
        <mat-label>Textarea</mat-label>
        <input [(ngModel)]="item" matInput placeholder="Escriba una tarea" />
      </mat-form-field>
    </section>
    <section>
      <button mat-flat-button color="secondary" (click)="addListItem()">
        Añadir
      </button>
    </section>
    <ul>
      @if (!list.length) {
      <mat-list>
        <mat-list-item> No hay ninguna tarea </mat-list-item>
      </mat-list>
      } @else {
      <todo-list-item
        [list]="list"
        (updateListItems)="deleteListItem($event)"
      ></todo-list-item>
      }
    </ul>
  `,
  styles: '',
  imports: [
    TodoListItem,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  standalone: true,
})
export class TodoList {
  //Properties
  public list: string[] = [];
  public item: string = '';
  private httpService = inject(TodoApiService);

  constructor() {}

  ngOnInit() {
    this.httpService.getDataHttpRequest().subscribe({
      next: async (response) => {
        let paylod = new APIMock(response);
        paylod.getResults().map((resp) => {
          console.log(resp);
        });
      },
      error: (err) => {
        console.log(err);
      },

      // this.serviceData = { ...(<APIMock>value).results };
      // Object.entries(this.serviceData).map((val) => {
      //   console.log(val);
      //   console.log((<APIObject>val[1]).name);
    });
  }

  addListItem(): void {
    if (this.item && this.item != null && this.item !== '') {
      this.list.push(this.item);
      this.item = '';
    }
  }

  deleteListItem(index: number): void {
    this.list = this.list.filter((value, i) => index != i);
    console.log('Event::updateListItems' + ' recived');
  }
}

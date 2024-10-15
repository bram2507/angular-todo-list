import { Component, Inject, inject, OnInit } from '@angular/core';
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
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [
    TodoListItem,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  standalone: true,
})
export class TodoList implements OnInit {
  //Properties
  public list: string[] = [];
  public item: string = '';
  private httpService = inject(TodoApiService);

  constructor() {}

  ngOnInit() {
    // this.httpService.getDataHttpRequest().subscribe({
    //   next: async (response) => {
    //     let paylod = new APIMock(response);
    //     paylod.getResults().map((resp) => {
    //       console.log(resp);
    //     });
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   // this.serviceData = { ...(<APIMock>value).results };
    //   // Object.entries(this.serviceData).map((val) => {
    //   //   console.log(val);
    //   //   console.log((<APIObject>val[1]).name);
    // });
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

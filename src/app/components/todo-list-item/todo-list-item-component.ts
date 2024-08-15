import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  template: `
    @for (item of list; track $index) {
    <li>{{ item }}</li>
    }
  `,
  standalone: true,
})
export class TodoListItem {
  //Properties
  @Input() list: string[] = [];
}

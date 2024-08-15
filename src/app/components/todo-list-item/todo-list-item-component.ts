import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  template: `
    @for (item of list; track $index) {
    <li>
      <div>
        {{ item }}
      </div>
      <div (click)="deleteListItem($index)">X</div>
    </li>
    }
  `,
  styles: `
  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    min-height: 30px;
    white-space: pre-wrap;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }

  `,
  standalone: true,
})
export class TodoListItem {
  //Properties
  @Input() list: string[] = [];
  @Output() updateListItems = new EventEmitter<number>();

  //Functions
  deleteListItem(index: number): void {
    console.log('Event::updateListItems' + ' fired');
    this.updateListItems.emit(index);
  }
}

import { Component, Input, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.compnent.html',
  styleUrl: './todo-list-item.component.scss',
  imports: [MatFormField, MatListModule, MatIconModule],
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

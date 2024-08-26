import { Component, Input, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  template: `
    <mat-action-list #tasks>
      @for (item of list; track $index) {
      <mat-list-item>
        {{ item }}
        <button
          (click)="deleteListItem($index)"
          matChipRemove
          [attr.aria-label]="'remove'"
        >
          <mat-icon>cancel</mat-icon>
        </button>
      </mat-list-item>
      }
    </mat-action-list>
  `,
  styles: `
  mat-list-action{
    display: flex;
    align-items: center;
    width: 250px;
    height: 60px;
  }

  `,
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

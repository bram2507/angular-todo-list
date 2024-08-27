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
        <div>
          {{ item }}
        </div>
        <div>
          <button
            (click)="deleteListItem($index)"
            matChipRemove
            [attr.aria-label]="'remove'"
          >
            <mat-icon>cancel</mat-icon>
          </button>
        </div>
      </mat-list-item>
      }
    </mat-action-list>
  `,
  styles: `
  mat-list-item{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 250px;
    height: 60px;
    border-radius: 4px;
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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoList,
    MatGridListModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  checked: boolean = false;
  theme: string = 'Light';
  matTheme: string = 'mat-theme-ligth';

  changeTheme(): void {
    this.checked = !this.checked;
    !this.checked ? (this.theme = 'Light') : (this.theme = 'Dark');
    this.matTheme === 'mat-theme-dark'
      ? (this.matTheme = 'mat-theme-light')
      : (this.matTheme = 'mat-theme-dark');
  }

  constructor() {}
}

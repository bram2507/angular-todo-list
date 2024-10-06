import { Component } from '@angular/core';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NavBar } from '@module/navbar/navbar.component';
import { GlobalTheme } from '@infrastructure/services/global-theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoList, MatGridListModule, MatCardModule, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  // checked: boolean = false;
  toogleTheme = {
    light: 'mat-theme-light',
    dark: 'mat-theme-dark',
    current: 'mat-theme-light',
    checked: false,
  };

  constructor() {
    this.toogleTheme = GlobalTheme.toogleTheme;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'theme',
})
export class ThemeType implements PipeTransform {
  transform(value: string): string {
    return `${value.slice(10, 15).toUpperCase()}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoList,
    MatGridListModule,
    MatToolbarModule,
    MatSlideToggleModule,
    ThemeType,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  checked: boolean = false;
  toogleTheme = {
    light: 'mat-theme-light',
    dark: 'mat-theme-dark',
    current: 'mat-theme-light',
    checked: false,
  };

  changeTheme(): void {
    this.toogleTheme.checked = !this.toogleTheme.checked;
    !this.toogleTheme.checked
      ? (this.toogleTheme.current = this.toogleTheme.light)
      : (this.toogleTheme.current = this.toogleTheme.dark);
  }

  constructor() {}
}

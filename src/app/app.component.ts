import { Component } from '@angular/core';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'theme',
})
export class ThemePipe implements PipeTransform {
  transform(value: string): string {
    return `${value.slice(10, 15).toUpperCase()}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodoList,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbar,
    ThemePipe,
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

  constructor() {}

  changeTheme(): void {
    this.toogleTheme.checked = !this.toogleTheme.checked;
    !this.toogleTheme.checked
      ? (this.toogleTheme.current = this.toogleTheme.light)
      : (this.toogleTheme.current = this.toogleTheme.dark);
  }
}

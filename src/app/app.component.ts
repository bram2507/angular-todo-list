import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
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
    RouterOutlet,
    TodoList,
    MatGridListModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    ThemePipe,
    NgClass,
    MatCardModule,
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

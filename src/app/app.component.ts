import { Component } from '@angular/core';
import { TodoList } from './module/task/components/todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NavBar } from '@module/navbar/navbar.component';
import { Theme } from '@core/models/theme.model';
import { ThemeService } from '@infrastructure/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoList, MatGridListModule, MatCardModule, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  currentTheme: Theme = new Theme();

  constructor(currentTheme: ThemeService) {
    currentTheme.getTheme().subscribe((value: Theme) => {
      this.currentTheme.current = value.current;
    });
  }
}

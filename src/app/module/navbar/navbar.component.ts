import { Component } from '@angular/core';
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
  selector: 'navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbar,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavBar {
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

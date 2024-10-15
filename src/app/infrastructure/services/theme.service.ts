import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Theme } from '@core/models/theme.model';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private GlobalTheme: BehaviorSubject<Theme>;
  constructor() {
    this.GlobalTheme = new BehaviorSubject<Theme>(new Theme());
  }

  getTheme(): Observable<Theme> {
    return this.GlobalTheme;
  }
  updateTheme(theme: Theme) {
    this.GlobalTheme.next(theme);
  }
}

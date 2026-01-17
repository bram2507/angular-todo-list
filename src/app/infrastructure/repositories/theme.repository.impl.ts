import { Injectable } from '@angular/core';
import { Theme } from '@core/models/theme.model';
import { ThemeRepository } from '@core/repositories/theme.repository';
import { ThemeService } from '@infrastructure/services/theme.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeRepositoryImpl implements ThemeRepository {
  constructor(private themeService: ThemeService) {}

  getTheme(): Observable<Theme> {
    return this.themeService.getTheme();
  }
  updateTheme(theme: Theme): void {
    this.themeService.updateTheme(theme);
  }
}

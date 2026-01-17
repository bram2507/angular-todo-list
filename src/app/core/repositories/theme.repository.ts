import { Observable } from 'rxjs';
import { Theme } from '@core/models/theme.model';

export abstract class ThemeRepository {
  abstract getTheme(): Observable<Theme>;
  abstract updateTheme(theme: Theme): void;
}

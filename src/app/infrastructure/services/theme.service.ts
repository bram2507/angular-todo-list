import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Theme } from '@core/models/theme.model';
import { ThemeDTO } from '@infrastructure/dto/theme.dto';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private GlobalTheme: BehaviorSubject<ThemeDTO>;
  constructor() {
    this.GlobalTheme = new BehaviorSubject<ThemeDTO>(new Theme());
  }

  getTheme(): Observable<ThemeDTO> {
    return this.GlobalTheme;
  }
  updateTheme(theme: ThemeDTO) {
    this.GlobalTheme.next(theme);
  }
}

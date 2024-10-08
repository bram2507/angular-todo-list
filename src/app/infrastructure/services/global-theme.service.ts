import { BehaviorSubject } from 'rxjs';

export interface Theme {
  light: string;
  dark: string;
  current: string;
  checked: boolean;
}

let GlobalTheme = {
  light: 'mat-theme-light',
  dark: 'mat-theme-dark',
  current: 'mat-theme-light',
  checked: false,
};

let currentTheme = new BehaviorSubject<Object>(GlobalTheme);

export default currentTheme;

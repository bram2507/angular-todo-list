//Estructura de datos de una tarea en la aplicación
export class Theme {
  light?: string;
  dark?: string;
  current?: string;
  checked?: boolean;
  constructor() {
    this.light = 'mat-theme-light';
    this.dark = 'mat-theme-dark';
    this.current = 'mat-theme-light';
    this.checked = false;
  }
}

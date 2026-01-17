//Estructura de datos de una tarea en la aplicación
export class Task {
  public id?: number;
  private description?: string;
  public completed?: boolean;

  constructor() {
    this.id = 0;
    this.description = '';
    this.completed = false;
  }
}

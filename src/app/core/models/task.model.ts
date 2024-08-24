//Estructura de datos de una tarea en la aplicación
export class Task {
  public id: number;
  public description: string;
  public completed: boolean;

  constructor() {
    this.id = 0;
    this.description = '';
    this.completed = false;
  }

  public getId(): number {
    return this.id;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCompleted(): boolean {
    return this.completed;
  }
}

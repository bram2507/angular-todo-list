// export interface TaskDTO {
//   id: number;
//   description: string;
//   completed: boolean;
// }

/*
    DTO (Data Transfer Object), que facilitan 
    el intercambio de datos entre las capas de 
    infraestructura y dominio
*/

export interface TaskDTO {
  id: number;
  description: string;
}

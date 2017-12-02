import { Tienda } from "app/model/tienda";

export class Producto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    picUri: string;
    tienda: Tienda;
}
import { Usuario } from "app/model/usuario";

export class Pedido{
    id: number;
    fechaPedido: string;
    fechaEntrega: string;
    usuario: Usuario;
}
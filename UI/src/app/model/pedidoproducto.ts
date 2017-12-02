import { Producto } from "app/model/producto";
import { Pedido } from "app/model/pedido";

export class PedidoProducto{
    id: number;
    cantidad: number;
    producto: Producto;
    pedido: Pedido;
}
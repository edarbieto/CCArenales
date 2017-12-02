import { Usuario } from "app/model/usuario";

export class Historia{
    id: number;
    fecha: string;
    titulo: string;
    historia: string;
    picUri: string;
    usuario: Usuario;
}
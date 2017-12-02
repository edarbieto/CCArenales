import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PedidoProducto } from 'app/model/pedidoproducto';

@Injectable()
export class PedidoProductoService {

  private pedidoproductoUri = 'http://localhost:8080/pedidoproducto/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getPedidos(): Promise<PedidoProducto[]> {
    return this.http.get(this.pedidoproductoUri)
      .toPromise().then(response => response.json() as PedidoProducto[])
      .catch(this.handleError);
  }

  getPedido(id: number): Promise<PedidoProducto> {
    return this.http.get(this.pedidoproductoUri + id.toString())
      .toPromise().then(response => response.json() as PedidoProducto)
      .catch(this.handleError);
  }

  createPedido(PedidoProducto: PedidoProducto): Promise<PedidoProducto> {
    return this.http.post(this.pedidoproductoUri, JSON.stringify(PedidoProducto), { headers: this.headers })
      .toPromise().then(res => res.json() as PedidoProducto)
      .catch(this.handleError);
  }

  updatePedido(PedidoProducto: PedidoProducto): Promise<PedidoProducto> {
    console.log("no pp")
    return this.http.put(this.pedidoproductoUri + PedidoProducto.id.toString(), JSON.stringify(PedidoProducto), { headers: this.headers })
      .toPromise().then(res => res.json() as PedidoProducto)
      .catch(this.handleError);
  }

  deletePedido(id: number): Promise<void> {
    return this.http.delete(this.pedidoproductoUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

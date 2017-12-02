import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pedido } from 'app/model/pedido';

@Injectable()
export class PedidoService {

  private pedidoUri = 'http://localhost:8080/pedido/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getPedidos(): Promise<Pedido[]> {
    return this.http.get(this.pedidoUri)
      .toPromise().then(response => response.json() as Pedido[])
      .catch(this.handleError);
  }

  getPedido(id: number): Promise<Pedido> {
    return this.http.get(this.pedidoUri + id.toString())
      .toPromise().then(response => response.json() as Pedido)
      .catch(this.handleError);
  }

  createPedido(Pedido: Pedido): Promise<Pedido> {
    return this.http.post(this.pedidoUri, JSON.stringify(Pedido), { headers: this.headers })
      .toPromise().then(res => res.json() as Pedido)
      .catch(this.handleError);
  }

  updatePedido(Pedido: Pedido): Promise<Pedido> {
    return this.http.put(this.pedidoUri + Pedido.id.toString(), JSON.stringify(Pedido), { headers: this.headers })
      .toPromise().then(res => res.json() as Pedido)
      .catch(this.handleError);
  }

  deletePedido(id: number): Promise<void> {
    return this.http.delete(this.pedidoUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

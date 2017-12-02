import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Producto } from 'app/model/producto';

@Injectable()
export class ProductoService {

  private productoUri = 'http://localhost:8080/producto/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getProductos(): Promise<Producto[]> {
    return this.http.get(this.productoUri)
      .toPromise().then(response => response.json() as Producto[])
      .catch(this.handleError);
  }

  getProducto(id: number): Promise<Producto> {
    return this.http.get(this.productoUri + id.toString())
      .toPromise().then(response => response.json() as Producto)
      .catch(this.handleError);
  }

  createProducto(producto: Producto): Promise<Producto> {
    return this.http.post(this.productoUri, JSON.stringify(producto), { headers: this.headers })
      .toPromise().then(res => res.json() as Producto)
      .catch(this.handleError);
  }

  updateProducto(producto: Producto): Promise<Producto> {
    return this.http.put(this.productoUri + producto.id.toString(), JSON.stringify(producto), { headers: this.headers })
      .toPromise().then(res => res.json() as Producto)
      .catch(this.handleError);
  }

  deleteProducto(id: number): Promise<void> {
    return this.http.delete(this.productoUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

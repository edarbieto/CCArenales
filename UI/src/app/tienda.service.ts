import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tienda } from 'app/model/tienda';

@Injectable()
export class TiendaService {

  private tiendaUri = 'http://localhost:8080/tienda/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getTiendas(): Promise<Tienda[]> {
    return this.http.get(this.tiendaUri)
      .toPromise().then(response => response.json() as Tienda[])
      .catch(this.handleError);
  }

  getTienda(id: number): Promise<Tienda> {
    return this.http.get(this.tiendaUri + id.toString())
      .toPromise().then(response => response.json() as Tienda)
      .catch(this.handleError);
  }

  createTienda(Tienda: Tienda): Promise<Tienda> {
    return this.http.post(this.tiendaUri, JSON.stringify(Tienda), { headers: this.headers })
      .toPromise().then(res => res.json() as Tienda)
      .catch(this.handleError);
  }

  updateTienda(Tienda: Tienda): Promise<Tienda> {
    return this.http.put(this.tiendaUri + Tienda.id.toString(), JSON.stringify(Tienda), { headers: this.headers })
      .toPromise().then(res => res.json() as Tienda)
      .catch(this.handleError);
  }

  deleteTienda(id: number): Promise<void> {
    return this.http.delete(this.tiendaUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

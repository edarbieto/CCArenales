import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Historia } from 'app/model/historia';

@Injectable()
export class HistoriaService {

  private historiaUri = 'http://localhost:8080/historia/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getHistorias(): Promise<Historia[]> {
    return this.http.get(this.historiaUri)
      .toPromise().then(response => response.json() as Historia[])
      .catch(this.handleError);
  }

  getHistoria(id: number): Promise<Historia> {
    return this.http.get(this.historiaUri + id.toString())
      .toPromise().then(response => response.json() as Historia)
      .catch(this.handleError);
  }

  createHistoria(Historia: Historia): Promise<Historia> {
    return this.http.post(this.historiaUri, JSON.stringify(Historia), { headers: this.headers })
      .toPromise().then(res => res.json() as Historia)
      .catch(this.handleError);
  }

  updateHistoria(Historia: Historia): Promise<Historia> {
    return this.http.put(this.historiaUri + Historia.id.toString(), JSON.stringify(Historia), { headers: this.headers })
      .toPromise().then(res => res.json() as Historia)
      .catch(this.handleError);
  }

  deleteHistoria(id: number): Promise<void> {
    return this.http.delete(this.historiaUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

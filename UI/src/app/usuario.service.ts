import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Usuario } from 'app/model/usuario';

@Injectable()
export class UsuarioService {

  private usuarioUri = 'http://localhost:8080/usuario/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getUsuarios(): Promise<Usuario[]> {
    return this.http.get(this.usuarioUri)
      .toPromise().then(response => response.json() as Usuario[])
      .catch(this.handleError);
  }

  getUsuario(id: number): Promise<Usuario> {
    return this.http.get(this.usuarioUri + id.toString())
      .toPromise().then(response => response.json() as Usuario)
      .catch(this.handleError);
  }

  createUsuario(Usuario: Usuario): Promise<Usuario> {
    return this.http.post(this.usuarioUri, JSON.stringify(Usuario), { headers: this.headers })
      .toPromise().then(res => res.json() as Usuario)
      .catch(this.handleError);
  }

  updateUsuario(Usuario: Usuario): Promise<Usuario> {
    return this.http.put(this.usuarioUri + Usuario.id.toString(), JSON.stringify(Usuario), { headers: this.headers })
      .toPromise().then(res => res.json() as Usuario)
      .catch(this.handleError);
  }

  deleteUsuario(id: number): Promise<void> {
    return this.http.delete(this.usuarioUri + id.toString(), { headers: this.headers })
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

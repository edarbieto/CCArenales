import { Injectable } from '@angular/core';
import { Usuario } from 'app/model/usuario';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  private busqueda: Subject<string>;
  busqueda$: Observable<string>;
  private usuario: Subject<Usuario>;
  usuario$: Observable<Usuario>;

  constructor(){
    this.busqueda = new Subject();
    this.busqueda$ = this.busqueda.asObservable();
    this.usuario = new Subject();
    this.usuario$ = this.usuario.asObservable();
  }

  postBusqueda(busqueda: string){
    this.busqueda.next(
      busqueda
    )
  }

  postUsuario(usuario: Usuario){
    this.usuario.next(
      usuario
    )
  }
}

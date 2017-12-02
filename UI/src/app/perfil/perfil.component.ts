import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/model/usuario';
import { UsuarioService } from 'app/usuario.service';
import { AppService } from 'app/app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  nuevoPassword: string;
  actualPassword: string;

  constructor(private usuarioService: UsuarioService, private appService: AppService, private location: Location) { }

  ngOnInit() {
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  back() {
    this.location.back();
  }

  guardar(){
    if (this.usuario.nickname == null || this.usuario.username == null){
      alert('El nickname o username no puede ser vacio');
      return;
    }
    if (this.actualPassword !== this.usuario.password){
      alert('El password no coincide');
      return;
    }
    if (this.nuevoPassword == null || this.nuevoPassword.length < 5){
      alert('El nuevo password no puede ser vacio y debe contener almenos 5 caracteres')
      return;
    }
    this.usuario.password = this.nuevoPassword;
    this.usuarioService.updateUsuario(this.usuario);
    alert('Usuario actualizado');
  }
}
